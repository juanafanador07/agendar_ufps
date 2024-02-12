import { Component, Input } from '@angular/core';
import { WeekDay } from '../../../models/calendar';

@Component({
  selector: 'app-days',
  standalone: true,
  imports: [],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css'
})
export class DaysComponent {
  @Input("day") day!:WeekDay

  ngOnInit(): void {
    console.log(this.day, 'sss')
  }
}
