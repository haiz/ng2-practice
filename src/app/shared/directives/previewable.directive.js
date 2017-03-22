"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ElmSize = (function () {
    function ElmSize(width, height) {
        this.width = width;
        this.height = height;
    }
    return ElmSize;
}());
var IViewerHelper = (function () {
    function IViewerHelper(ivObj, box) {
        this.ivObj = ivObj;
        this.box = {
            maxSize: new ElmSize(0, 0),
            size: new ElmSize(0, 0),
            alwaysFit: true,
            centerPoint: { x: 0, y: 0 },
            zooming: 0,
            rotating: 0,
            el: null
        };
        if (!!box) {
            Object.assign(this.box, box);
        }
    }
    IViewerHelper.prototype.setBoxOptions = function (k, v) {
        this.box[k] = v;
    };
    IViewerHelper.prototype.resizeBox = function (maxSize, resetRatio) {
        if (resetRatio === void 0) { resetRatio = false; }
        if (maxSize.width > 0 && maxSize.height > 0) {
            var dSize = this.availBox(maxSize, resetRatio);
            var css = {
                width: dSize.width + 'px',
                height: dSize.height + 'px'
            };
            jQuery(this.box.el.nativeElement).css(css);
            this.ivObj.iviewer('update');
        }
    };
    // enlarge a box to an available space
    IViewerHelper.prototype.enlargeBox = function (resetRatio) {
        if (resetRatio === void 0) { resetRatio = false; }
        this.resizeBox(this.box.maxSize, resetRatio);
    };
    IViewerHelper.prototype.updateBoxSize = function (currSize) {
        if (currSize) {
            if (currSize.width < this.box.maxSize.width || currSize.height < this.box.maxSize.height) {
                this.box.size = {
                    width: Math.min(currSize.width, this.box.maxSize.width),
                    height: Math.min(currSize.height, this.box.maxSize.height)
                };
                this.resizeBox(this.box.size);
            }
        }
        else {
            this.resizeBox(this.box.maxSize);
        }
    };
    IViewerHelper.prototype.rotateBox = function (oldCenterPoint, rotating) {
        this.enlargeBox(false);
        if (rotating) {
            var info = this.info();
            if (rotating === 90) {
                this.ivObj.iviewer('moveTo', info.displaySize.width - oldCenterPoint.y, oldCenterPoint.x);
            }
            else if (rotating === -90) {
                this.ivObj.iviewer('moveTo', oldCenterPoint.y, info.displaySize.height - oldCenterPoint.x);
            }
            this.ivObj.iviewer('update');
        }
    };
    IViewerHelper.prototype.availBox = function (maxSize, resetRatio) {
        if (resetRatio === void 0) { resetRatio = false; }
        var info = this.info();
        var ratio = Math.min(maxSize.width / info.origSize.width, maxSize.height / info.origSize.height, 1);
        if (!resetRatio) {
            // not reset the ratio, keep display size (the size of image tag)
            var ratio2 = Math.min(info.displaySize.width / info.origSize.width, info.displaySize.height / info.origSize.height, 1);
            ratio = Math.min(ratio, ratio2);
        }
        return {
            ratio: ratio,
            width: ratio * info.origSize.width,
            height: ratio * info.origSize.height
        };
    };
    IViewerHelper.prototype.getZoomCenter = function () {
        var info = this.info();
        return {
            x: this.box.el.nativeElement.offsetWidth / 2 - info.coords.x,
            y: this.box.el.nativeElement.offsetHeight / 2 - info.coords.y,
        };
    };
    // get iviewer object information
    IViewerHelper.prototype.info = function () {
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
    };
    return IViewerHelper;
}());
var PreviewableDirective = (function () {
    function PreviewableDirective(el, differs) {
        this.el = el;
        this.differs = differs;
        this.differ = differs.find({}).create(null);
    }
    Object.defineProperty(PreviewableDirective.prototype, "previewable", {
        set: function (ivOptions) {
            this.ivOptions = ivOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviewableDirective.prototype, "box", {
        set: function (boxOptions) {
            this.boxOptions = boxOptions;
        },
        enumerable: true,
        configurable: true
    });
    PreviewableDirective.prototype.ngOnInit = function () {
        this.initIviewer();
    };
    PreviewableDirective.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.boxOptions);
        if (changes) {
            this.ivHelper.enlargeBox();
            changes.forEachChangedItem(function (r) {
                if (r.key === 'maxSize') {
                    _this.ivHelper.setBoxOptions(r.key, r.currentValue);
                    _this.ivHelper.enlargeBox();
                }
            });
            // changes.forEachChangedItem((r: any) => console.log('changed ', r));
            // changes.forEachAddedItem((r: any) => console.log('added ', r));
            // changes.forEachRemovedItem((r: any) => console.log('removed ', r));
        }
    };
    PreviewableDirective.prototype.initIviewer = function () {
        var that = this;
        var fs = {
            onFinishLoad: function (ev) {
                that.ivHelper.enlargeBox(true);
            },
            onBeforeAngle: function (ev, info) {
                that.ivHelper.box.centerPoint = that.ivHelper.getZoomCenter();
            },
            angle: function (ev) {
                if (that.ivHelper.info().fit) {
                    that.ivHelper.enlargeBox(true);
                }
                else if (that.ivHelper.box.alwaysFit) {
                    that.ivHelper.rotateBox(that.ivHelper.box.centerPoint, that.ivHelper.box.zooming);
                }
            },
            onAfterZoom: function (ev) {
                var info = that.ivHelper.info();
                // zooming out
                if (that.ivHelper.box.zooming < 0) {
                    if (info.coords.x >= 1 || info.coords.y >= 1) {
                        that.ivHelper.enlargeBox();
                    }
                }
                else if (that.ivHelper.box.zooming > 0) {
                    // zooming in
                    if (that.ivHelper.box.alwaysFit) {
                        that.ivHelper.enlargeBox();
                    }
                }
                that.ivHelper.box.zooming = 0;
            }
        };
        var options = {};
        Object.assign(options, this.ivOptions, fs);
        this.ivObj = jQuery(this.el.nativeElement).iviewer(options);
        this.ivHelper = new IViewerHelper(this.ivObj, this.boxOptions);
    };
    PreviewableDirective.prototype.zoomBy = function (n) {
        this.ivObj.iviewer('zoom_by', n);
    };
    PreviewableDirective.prototype.zoomIn = function () {
        this.ivHelper.box.zooming = 1;
        this.ivObj.iviewer('zoom_by', 1);
    };
    PreviewableDirective.prototype.zoomOut = function () {
        this.ivHelper.box.zooming = -1;
        this.ivObj.iviewer('zoom_by', -1);
    };
    PreviewableDirective.prototype.fit = function () {
        this.ivObj.iviewer('fit');
    };
    PreviewableDirective.prototype.actualSize = function () {
        this.ivObj.iviewer('set_zoom', 100);
    };
    PreviewableDirective.prototype.rotateLeft = function () {
        this.ivHelper.box.zooming = -90;
        this.ivObj.iviewer('angle', -90);
    };
    PreviewableDirective.prototype.rotateRight = function () {
        this.ivHelper.box.zooming = 90;
        this.ivObj.iviewer('angle', 90);
    };
    return PreviewableDirective;
}());
__decorate([
    core_1.Input('previewable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PreviewableDirective.prototype, "previewable", null);
__decorate([
    core_1.Input('box'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PreviewableDirective.prototype, "box", null);
PreviewableDirective = __decorate([
    core_1.Directive({
        selector: '[previewable]',
        exportAs: 'previewable',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.KeyValueDiffers])
], PreviewableDirective);
exports.PreviewableDirective = PreviewableDirective;
//# sourceMappingURL=previewable.directive.js.map