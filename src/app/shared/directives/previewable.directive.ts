import { Directive, ElementRef, OnInit, Input, DoCheck, KeyValueDiffers } from '@angular/core';

declare var jQuery: any;

class ElmSize {
    constructor(public width?: number, public height?: number) { }
}

class IViewerHelper {
    box: any = {
        maxSize: new ElmSize(0, 0),
        size: new ElmSize(0, 0),
        alwaysFit: true,
        centerPoint: { x: 0, y: 0 },
        zooming: 0,
        rotating: 0,
        el: null
    };

    constructor(private ivObj: any, box?: any) {
        if (!!box) {
            Object.assign(this.box, box);
        }
    }

    setBoxOptions(k: string, v: any) {
        this.box[k] = v;
    }

    resizeBox(maxSize: ElmSize, resetRatio: boolean = false) {
        if (maxSize.width > 0 && maxSize.height > 0) {
            let dSize = this.availBox(maxSize, resetRatio);
            let css = {
                width: dSize.width + 'px',
                height: dSize.height + 'px'
            };

            jQuery(this.box.el.nativeElement).css(css);
            this.ivObj.iviewer('update');
        }
    }

    // enlarge a box to an available space
    enlargeBox(resetRatio: boolean = false) {
        this.resizeBox(this.box.maxSize, resetRatio);
    }

    updateBoxSize(currSize?: ElmSize) {
        if (currSize) {
            if (currSize.width < this.box.maxSize.width || currSize.height < this.box.maxSize.height) {
                this.box.size = {
                    width: Math.min(currSize.width, this.box.maxSize.width),
                    height: Math.min(currSize.height, this.box.maxSize.height)
                };
                this.resizeBox(this.box.size);
            }
        } else {
            this.resizeBox(this.box.maxSize);
        }
    }

    rotateBox(oldCenterPoint: any, rotating: number) {

        this.enlargeBox(false);
        if (rotating) {
            let info = this.info();
            if (rotating === 90) {
                this.ivObj.iviewer('moveTo', info.displaySize.width - oldCenterPoint.y, oldCenterPoint.x);
            } else if (rotating === -90) {
                this.ivObj.iviewer('moveTo', oldCenterPoint.y, info.displaySize.height - oldCenterPoint.x);
            }
            this.ivObj.iviewer('update');
        }
    }

    availBox(maxSize: ElmSize, resetRatio: boolean = false) {
        let info = this.info();
        let ratio = Math.min(maxSize.width / info.origSize.width, maxSize.height / info.origSize.height, 1);
        if (!resetRatio) {
            // not reset the ratio, keep display size (the size of image tag)
            let ratio2 = Math.min(info.displaySize.width / info.origSize.width, info.displaySize.height / info.origSize.height, 1);
            ratio = Math.min(ratio, ratio2);
        }

        return {
            ratio: ratio,
            width: ratio * info.origSize.width,
            height: ratio * info.origSize.height
        };
    }

    getZoomCenter() {
        let info = this.info();
        return {
            x: this.box.el.nativeElement.offsetWidth / 2 - info.coords.x,
            y: this.box.el.nativeElement.offsetHeight / 2 - info.coords.y,
        };
    }

    // get iviewer object information
    info() {
        return {
            displaySize: {
                width: this.ivObj.iviewer('info', 'display_width'),
                height: this.ivObj.iviewer('info', 'display_height')
            },
            origSize: {
                width: this.ivObj.iviewer('info', 'orig_width'),
                height: this.ivObj.iviewer('info', 'orig_height'),
            },
            angle: this.ivObj.iviewer('info', 'angle'),
            zoom: this.ivObj.iviewer('info', 'zoom'),
            zoom_center: this.ivObj.iviewer('info', 'zoom_center'),
            fit: this.ivObj.iviewer('info', 'fit'),
            coords: this.ivObj.iviewer('info', 'coords'),
        };
    }
}

@Directive({
    selector: '[previewable]',
    exportAs: 'previewable',
})

export class PreviewableDirective implements OnInit, DoCheck {
    private ivObj: any;
    public ivHelper: any;
    private ivOptions: any;
    private boxOptions: any;
    differ: any;

    @Input('previewable')
    set previewable(ivOptions: any) {
        this.ivOptions = ivOptions;
    }
    @Input('box')
    set box(boxOptions: any) {
        this.boxOptions = boxOptions;
    }

    constructor(private el: ElementRef, private differs: KeyValueDiffers) {
        this.differ = differs.find({}).create(null);
    }

    ngOnInit() {
        this.initIviewer();
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.boxOptions);

        if (changes) {
            this.ivHelper.enlargeBox();
            changes.forEachChangedItem((r: any) => {
                if (r.key === 'maxSize') {
                    this.ivHelper.setBoxOptions(r.key, r.currentValue);
                    this.ivHelper.enlargeBox();
                }
            });
            // changes.forEachChangedItem((r: any) => console.log('changed ', r));
            // changes.forEachAddedItem((r: any) => console.log('added ', r));
            // changes.forEachRemovedItem((r: any) => console.log('removed ', r));
        }
    }

    initIviewer() {
        let that = this;
        let fs = {
            onFinishLoad: function (ev: any) {
                that.ivHelper.enlargeBox(true);
            },
            onBeforeAngle: function (ev: any, info: any) {
                that.ivHelper.box.centerPoint = that.ivHelper.getZoomCenter();
            },
            angle: function (ev: any) {
                if (that.ivHelper.info().fit) {
                    that.ivHelper.enlargeBox(true);
                } else if (that.ivHelper.box.alwaysFit) {
                    that.ivHelper.rotateBox(that.ivHelper.box.centerPoint, that.ivHelper.box.zooming);
                }
            },
            onAfterZoom: function (ev: any) {
                let info = that.ivHelper.info();
                // zooming out
                if (that.ivHelper.box.zooming < 0) {
                    if (info.coords.x >= 1 || info.coords.y >= 1) {
                        that.ivHelper.enlargeBox();
                    }
                } else if (that.ivHelper.box.zooming > 0) {
                    // zooming in
                    if (that.ivHelper.box.alwaysFit) {
                        that.ivHelper.enlargeBox();
                    }
                }
                that.ivHelper.box.zooming = 0;
            }
        };
        let options = {};
        Object.assign(options, this.ivOptions, fs);
        this.ivObj = jQuery(this.el.nativeElement).iviewer(options);
        this.ivHelper = new IViewerHelper(this.ivObj, this.boxOptions);
    }

    zoomBy(n: number) {
        this.ivObj.iviewer('zoom_by', n);
    }

    zoomIn() {
        this.ivHelper.box.zooming = 1;
        this.ivObj.iviewer('zoom_by', 1);
    }
    zoomOut() {
        this.ivHelper.box.zooming = -1;
        this.ivObj.iviewer('zoom_by', -1);
    }
    fit() {
        this.ivObj.iviewer('fit');
    }
    actualSize() {
        this.ivObj.iviewer('set_zoom', 100);
    }
    rotateLeft() {
        this.ivHelper.box.zooming = -90;
        this.ivObj.iviewer('angle', -90);
    }
    rotateRight() {
        this.ivHelper.box.zooming = 90;
        this.ivObj.iviewer('angle', 90);
    }
}
