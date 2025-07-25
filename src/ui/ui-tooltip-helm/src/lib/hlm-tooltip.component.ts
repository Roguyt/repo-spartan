import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {
    BrnTooltipContentDirective,
    BrnTooltipDirective,
} from '@spartan-ng/ui-tooltip-brain';

@Component({
    selector: 'hlm-tooltip',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BrnTooltipContentDirective],
    providers: [],
    host: {
        '[style]': '{display: "contents"}',
    },
    hostDirectives: [BrnTooltipDirective],
    template: `
        <ng-content />
        @if (tooltip.length > 0) {
            <span *brnTooltipContent [innerHTML]="tooltip"></span>
        }
    `,
})
export class HlmTooltipComponent {
    @Input({ required: true })
    protected readonly tooltip: string;
}
