import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appActiveHighlight]',
    standalone: true
})
export class ActiveHighlightDirective {
    @Input('appActiveHighlight') isActive: boolean = false;

    @HostBinding('class.active-highlight') get valid() {
        return this.isActive;
    }
}
