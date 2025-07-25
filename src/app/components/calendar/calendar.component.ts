import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import {DaysUtils} from '../../days.utils';
import {CalendarRowComponent} from '@app/components/calendar-row/calendar-row.component';
import {CalendarHeaderComponent} from '@app/components/calendar-header/calendar-header.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CalendarRowComponent,
    CalendarHeaderComponent
  ]
})
export class CalendarComponent implements OnChanges {

    protected fakeArray = DaysUtils.getNthArray(12);

    @Input({ required: true })
    type: 'year' | 'profiles';

    @Input()
    date?: Date;

    ngOnChanges(changes: SimpleChanges): void {
    }
}
