import { Component, Input } from '@angular/core';
import {DaysUtils} from '@app/days.utils';

@Component({
    selector: 'app-calendar-header',
    templateUrl: './calendar-header.component.html',
    styleUrls: ['./calendar-header.component.scss'],
  standalone: true,
})
export class CalendarHeaderComponent {
    public readonly daysUtils = DaysUtils;

    @Input()
    public date: Date;

    @Input()
    public year?: boolean;
}
