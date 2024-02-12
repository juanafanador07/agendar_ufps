import { Component } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
