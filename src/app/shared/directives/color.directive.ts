import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[color]',
    inputs: ['bgColor', 'colour:color']
})
export class ColorDirective {
    constructor(private el: ElementRef) { }

    set colour(color: string) {
        this.el.nativeElement.style.color = color;
        console.log('text color: ' + color);
    }

    set bgColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        console.log('background color: ' + color);
    }
}
