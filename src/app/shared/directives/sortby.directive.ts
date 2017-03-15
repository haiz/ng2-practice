import {Directive, Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[sort-by]',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SortbyDirective {
    private sortProperty: string;
    constructor() {}

    @Output()
    sorted: EventEmitter<string>= new EventEmitter<string>();

    @Input('sort-by')
    set sortBy(value: string) {
        this.sortProperty = value;
    }

    onClick(event: any) {
        event.preventDefault();
        this.sorted.next(this.sortProperty);
    }
}