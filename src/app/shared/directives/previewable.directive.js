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
var PreviewableDirective = (function () {
    function PreviewableDirective(el) {
        this.el = el;
    }
    PreviewableDirective.prototype.ngOnInit = function () {
        console.log('init previewable');
        this.ivObj = jQuery(this.el.nativeElement).iviewer(this.options);
    };
    PreviewableDirective.prototype.zoomBy = function (n) {
        console.log('iviewer zoom by: ' + n);
        this.ivObj.iviewer('zoom_by', n);
    };
    return PreviewableDirective;
}());
__decorate([
    core_1.Input('previewable'),
    __metadata("design:type", Object)
], PreviewableDirective.prototype, "options", void 0);
PreviewableDirective = __decorate([
    core_1.Directive({
        selector: '[previewable]',
        exportAs: 'previewable'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PreviewableDirective);
exports.PreviewableDirective = PreviewableDirective;
//# sourceMappingURL=previewable.directive.js.map