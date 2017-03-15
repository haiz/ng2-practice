import { Directive, ElementRef, OnInit, Input } from '@angular/core';

declare var jQuery: any;

@Directive({
    selector: '[draggable]'
})

export class DraggableDirective implements OnInit {
    @Input('draggable') options: any = {};

    constructor(private el: ElementRef) { }

    ngOnInit() {
        jQuery(this.el.nativeElement).draggable({ containment: 'body' });
    }
}
