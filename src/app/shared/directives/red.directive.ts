import { Directive, ElementRef, Host } from '@angular/core';

@Directive({
    selector: '[red]',
    host: {
        '(mouseenter)': 'onMouseEnter($event.target)',
        '(mouseleave)': 'onMouseLeave($event.target)'
    }
})
export class RedDirective {
    private defaultColor: string = 'red';
    constructor(private el: ElementRef) {
        this.setColor(this.defaultColor);
    }

    onMouseEnter() {
        this.setColor('blue');
    }

    onMouseLeave() {
        this.setColor(this.defaultColor);
    }

    private setColor(color: string) {
        this.el.nativeElement.style.color = color;
    }
}