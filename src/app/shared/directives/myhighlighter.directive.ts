import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[my-highlighter]',
})
export class MyhighlighterDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.background = 'yellow';
    }
}
