import { Component, OnInit } from '@angular/core';
import { DaysComponent } from './days/days.component';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormArray, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DaysComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const weekDays = days.map(day => {
      return this.formBuilder.group({
        nombre: day,
        state: [false],
        intervals: this.formBuilder.array([])
      });
    });
  
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      weekDays: this.formBuilder.array(weekDays)
    });
  }
  
  get weekDays (){
     return this.form.get('weekDays') as FormArray
  }

  castToFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  save(){
    if(this.form.valid){
      const data : any = {
        ...this.form.value,
        weekDays: this.form.value.weekDays.filter((day : any) => {
          return day.state
        }).map((day : any) => {
          return {
            ...day,
            state: 1
          }
        })
      }
    
      console.log(data)
    }
  }

}
