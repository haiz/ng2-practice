import { Component, ViewChild, Input, OnInit, HostListener } from '@angular/core';
import { PreviewableDirective } from '../shared/directives/previewable.directive';

@Component({
    selector: 'popup-preview',
    templateUrl: 'app/popup-preview/popup-preview.component.html'
})

export class PopupPreviewComponent implements OnInit {
    private imgUrl: string;
    @ViewChild('box') box: any;
    public boxOptions: any = {};
    public previewOptions: any;
    @Input('src')
    set src(url: string) {
        this.imgUrl = url;
        if (this.imgUrl) {
            // this.previewOptions = {
            //     src: this.imgUrl,
            //     mousewheel: false,
            //     zoom_animation: false
            // };
            this.previewOptions = {
                // src: "test_active_with_objects.GIF",
                // src: 'https://dummyimage.com/300x1400/ff88cc/0f0',
                src: 'https://dummyimage.com/1400x300/ff88cc/0f0',
                // src: 'https://dummyimage.com/300x200/ff88cc/0f0',
                zoom_min: 5,
                ui_disabled: true,
                zoom_animation: false
            };
        }
    };

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
        this.setMaxSize();
    }

    ngOnInit() {
        this.boxOptions.el = this.box;
    }

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
