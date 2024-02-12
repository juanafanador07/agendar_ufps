import { Component } from '@angular/core';
import { DaysComponent } from './days/days.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DaysComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public form!: FormGroup;
  constructor( private formBuilder: FormBuilder ) { }
  weekDay = [
    {
      nombre: "",
      state: false,
      intervals: [
        {
          date_start: "",
          date_end: ""
        },
      ]
    }
  ]

  ngOnInit(): void {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    this.weekDay = days.map(day => ({
      nombre: day,
      state: false,
      intervals: [{ date_start: "", date_end: "" }]
    }));

    this.form = this.formBuilder.group({
      nombre:['', Validators.required],
      state: ['', Validators.required],
      intervals: [
        {
          date_start: ['', Validators.required],
          date_end: ['', Validators.required]
        },
      ],
    });
  }
}
