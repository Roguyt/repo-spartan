import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarComponent} from '@app/components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'repo-spartan';
  date: Date = new Date();
}
