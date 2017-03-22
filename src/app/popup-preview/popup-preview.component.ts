import { Component, ViewChild, Input, OnDestroy, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { PreviewableDirective } from '../shared/directives/previewable.directive';

@Component({
    selector: 'popup-preview',
    templateUrl: 'app/popup-preview/popup-preview.component.html'
})

export class PopupPreviewComponent implements OnDestroy, AfterViewInit {
    private imgUrl: string;
    @ViewChild('box') box: any;
    public boxOptions: any = {};
    public previewOptions: any;
    @Input('src')
    set src(url: string) {
        this.imgUrl = url;
        if (this.imgUrl) {
            this.previewOptions = {
                src: this.imgUrl,
                mousewheel: false,
                zoom_animation: false
            };
        }
    };
    // @ViewChild('ivObj') ivObj: PreviewableDirective;
    @ViewChild('ivObj') ivObj: PreviewableDirective;
    // resizeOptions = {
    //     aspectRatio: 1,
    //     maxHeight: 250,
    //     maxWidth: 350
    // };
    maxSize: any;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setMaxSize();
    };

    setMaxSize() {
        this.maxSize = {
            width: Math.round(window.innerWidth * 0.8) - 2,
            height: Math.round(window.innerHeight * 0.9) - 42,
        };
        this.boxOptions.maxSize = this.maxSize;
    }

    constructor() {
        console.log('popup constructor');
        this.setMaxSize();
    }

    ngOnInit() {
        console.log('Popup preview onInit tadatadaaaaaa: ', this.box);
        this.boxOptions.el = this.box;
    }

    ngOnDestroy() {
        console.log('destroy popup component');
    }

    ngAfterViewInit() {
        console.log('Popup preview after view init tadatadaaaaaa');
    }

    // zoomBy(n: number) {
    //     console.log('popup zoom by: ' + n);
    //     console.log(this.ivObj);
    //     // this.pvObj.zoomBy(n);
    //     this.ivObj.zoomBy(n);
    // }



    zoomIn() {
        this.ivObj.zoomIn();
    }
    zoomOut() {
        this.ivObj.zoomOut();
    }
    fit() {
        this.ivObj.fit();
    }
    actualSize() {
        this.ivObj.actualSize();
    }
    rotateLeft() {
        this.ivObj.rotateLeft();
    }
    rotateRight() {
        this.ivObj.rotateRight();
    }
}
