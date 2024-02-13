import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { hourValidator } from './validators/hourValidator';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})
export class DaysComponent {
  @Input() dayForm!:FormGroup

  public tempForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    const validators = [
      Validators.required,
      Validators.pattern(/\d\d?:\d\d?/),
      hourValidator()
    ]

    this.tempForm = this.formBuilder.group({
      date_start: [null, validators],
      date_end: [null, validators]
    });
  }

  addInterval(){
    const intervals = this.dayForm.get("intervals") as FormArray;

    if(this.tempForm.valid){
      intervals.push(this.formBuilder.group({
        ...this.tempForm.value
      }))

      this.tempForm.setValue({
        date_start: null,
        date_end: null
      })
    }
  }

  deleteInterval(index: number){
    const intervals = this.dayForm.get("intervals") as FormArray;

    intervals.removeAt(index)
  }
}
