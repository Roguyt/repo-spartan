import {
  ChangeDetectionStrategy,
  Component, DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {DaysUtils} from '../../days.utils';
import {CalendarCellComponent} from '@app/components/calendar-cell/calendar-cell.component';

@Component({
  selector: 'app-calendar-row',
  templateUrl: './calendar-row.component.html',
  styleUrls: ['./calendar-row.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CalendarCellComponent
  ]
})
export class CalendarRowComponent implements OnChanges, DoCheck {

    protected fakeArray = [];
    protected missingFakeArray = [];
    protected monthLabel = '';

    @Input({ required: true })
    type: 'month' | 'profile';

    @Input({ required: true })
    public month: number;
    @Input({ required: true })
    public year: number;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.month || changes.year) {
            this.fakeArray = DaysUtils.getNthArray(
                DaysUtils.getDayAmount(this.year, this.month),
            );
            this.missingFakeArray = DaysUtils.getNthArray(
                31 - this.fakeArray.length,
            );

            this.monthLabel = DaysUtils.getMonthFromIdx(this.month);
        }
    }

  ngDoCheck(): void {
    console.log('Checking row ' + this.month);
  }
}
