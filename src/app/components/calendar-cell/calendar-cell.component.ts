import {
  ChangeDetectionStrategy,
  Component, DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {HlmTooltipComponent, HlmTooltipTriggerDirective} from '@spartan-ng/ui-tooltip-helm';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HlmTooltipTriggerDirective,
    HlmTooltipComponent
  ]
})
export class CalendarCellComponent implements OnChanges, DoCheck {

    @Input()
    public day: number;
    @Input()
    public month?: number;
    @Input()
    public year: number;

    ngOnChanges(changes: SimpleChanges): void {

    }

  ngDoCheck(): void {
    console.log(`Checking cell ${this.month} ${this.day}`);
  }
}
