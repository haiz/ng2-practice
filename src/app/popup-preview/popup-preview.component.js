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
    }
    PopupPreviewComponent.prototype.ngOnInit = function () {
        console.log('init popup component');
        if (this.imgUrl) {
            this.ivOptions = {
                src: this.imgUrl,
                mousewheel: false,
                zoom_animation: false
            };
        }
    };
    PopupPreviewComponent.prototype.ngOnDestroy = function () {
        console.log('destroy popup component');
    };
    PopupPreviewComponent.prototype.ngAfterViewInit = function () {
    };
    PopupPreviewComponent.prototype.zoomBy = function (n) {
        console.log('popup zoom by: ' + n);
        console.log(this.ivObj);
        // this.pvObj.zoomBy(n);
        this.ivObj.zoomBy(n);
    };
    return PopupPreviewComponent;
}());
__decorate([
    core_1.Input('src'),
    __metadata("design:type", String)
], PopupPreviewComponent.prototype, "imgUrl", void 0);
__decorate([
    core_1.ViewChild('ivObj'),
    __metadata("design:type", previewable_directive_1.PreviewableDirective)
], PopupPreviewComponent.prototype, "ivObj", void 0);
PopupPreviewComponent = __decorate([
    core_1.Component({
        selector: 'popup-preview',
        templateUrl: 'app/popup-preview/popup-preview.component.html'
    }),
    __metadata("design:paramtypes", [])
], PopupPreviewComponent);
exports.PopupPreviewComponent = PopupPreviewComponent;
//# sourceMappingURL=popup-preview.component.js.map