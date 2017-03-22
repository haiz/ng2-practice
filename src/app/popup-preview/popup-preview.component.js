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
var previewable_directive_1 = require("../shared/directives/previewable.directive");
var PopupPreviewComponent = (function () {
    function PopupPreviewComponent() {
        this.boxOptions = {};
        console.log('popup constructor');
        this.setMaxSize();
    }
    Object.defineProperty(PopupPreviewComponent.prototype, "src", {
        set: function (url) {
            this.imgUrl = url;
            if (this.imgUrl) {
                this.previewOptions = {
                    src: this.imgUrl,
                    mousewheel: false,
                    zoom_animation: false
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    PopupPreviewComponent.prototype.onResize = function (event) {
        this.setMaxSize();
    };
    ;
    PopupPreviewComponent.prototype.setMaxSize = function () {
        this.maxSize = {
            width: Math.round(window.innerWidth * 0.8) - 2,
            height: Math.round(window.innerHeight * 0.9) - 42,
        };
        this.boxOptions.maxSize = this.maxSize;
    };
    PopupPreviewComponent.prototype.ngOnInit = function () {
        console.log('Popup preview onInit tadatadaaaaaa: ', this.box);
        this.boxOptions.el = this.box;
    };
    PopupPreviewComponent.prototype.ngOnDestroy = function () {
        console.log('destroy popup component');
    };
    PopupPreviewComponent.prototype.ngAfterViewInit = function () {
        console.log('Popup preview after view init tadatadaaaaaa');
    };
    // zoomBy(n: number) {
    //     console.log('popup zoom by: ' + n);
    //     console.log(this.ivObj);
    //     // this.pvObj.zoomBy(n);
    //     this.ivObj.zoomBy(n);
    // }
    PopupPreviewComponent.prototype.zoomIn = function () {
        this.ivObj.zoomIn();
    };
    PopupPreviewComponent.prototype.zoomOut = function () {
        this.ivObj.zoomOut();
    };
    PopupPreviewComponent.prototype.fit = function () {
        this.ivObj.fit();
    };
    PopupPreviewComponent.prototype.actualSize = function () {
        this.ivObj.actualSize();
    };
    PopupPreviewComponent.prototype.rotateLeft = function () {
        this.ivObj.rotateLeft();
    };
    PopupPreviewComponent.prototype.rotateRight = function () {
        this.ivObj.rotateRight();
    };
    return PopupPreviewComponent;
}());
__decorate([
    core_1.ViewChild('box'),
    __metadata("design:type", Object)
], PopupPreviewComponent.prototype, "box", void 0);
__decorate([
    core_1.Input('src'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PopupPreviewComponent.prototype, "src", null);
__decorate([
    core_1.ViewChild('ivObj'),
    __metadata("design:type", previewable_directive_1.PreviewableDirective)
], PopupPreviewComponent.prototype, "ivObj", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PopupPreviewComponent.prototype, "onResize", null);
PopupPreviewComponent = __decorate([
    core_1.Component({
        selector: 'popup-preview',
        templateUrl: 'app/popup-preview/popup-preview.component.html'
    }),
    __metadata("design:paramtypes", [])
], PopupPreviewComponent);
exports.PopupPreviewComponent = PopupPreviewComponent;
//# sourceMappingURL=popup-preview.component.js.map