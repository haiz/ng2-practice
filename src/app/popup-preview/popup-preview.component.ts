import { Component, ViewChild, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { PreviewableDirective } from '../shared/directives/previewable.directive';

@Component({
    selector: 'popup-preview',
    templateUrl: 'app/popup-preview/popup-preview.component.html'
})

export class PopupPreviewComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input('src') imgUrl: string;
    // @ViewChild('ivObj') ivObj: PreviewableDirective;
    @ViewChild('ivObj') ivObj: PreviewableDirective;
    ivOptions: any;

    constructor() { }

    ngOnInit() {
        console.log('init popup component');
        if (this.imgUrl) {
            this.ivOptions = {
                src: this.imgUrl,
                mousewheel: false,
                zoom_animation: false
            };
        }
    }

    ngOnDestroy() {
        console.log('destroy popup component');
    }

    ngAfterViewInit() {

    }

    zoomBy(n: number) {
        console.log('popup zoom by: ' + n);
        console.log(this.ivObj);
        // this.pvObj.zoomBy(n);
        this.ivObj.zoomBy(n);
    }
}
