import { Directive, ElementRef, OnInit, Input } from '@angular/core';

declare var jQuery: any;

@Directive({
    selector: '[resizable]'
})

export class ResizableDirective implements OnInit {
    @Input('resizable') options: any = {};

    constructor(private el: ElementRef) { }

    ngOnInit() {
        jQuery(this.el.nativeElement).resizable();
    }
}
