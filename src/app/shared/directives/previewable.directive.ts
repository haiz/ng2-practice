import  {Directive, ElementRef, OnInit, Input} from '@angular/core';

declare var jQuery: any;

@Directive({
    selector: '[previewable]',
    exportAs: 'previewable'
})

export class PreviewableDirective implements OnInit {
    @Input('previewable') options: any;
    private ivObj: any;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        console.log('init previewable');
        this.ivObj = jQuery(this.el.nativeElement).iviewer(this.options);
    }

    zoomBy(n: number) {
        console.log('iviewer zoom by: ' + n);
        this.ivObj.iviewer('zoom_by', n);
    }
}
