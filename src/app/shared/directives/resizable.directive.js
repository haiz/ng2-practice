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
var ResizableDirective = (function () {
    function ResizableDirective(el) {
        this.el = el;
        this.options = {};
    }
    ResizableDirective.prototype.ngOnInit = function () {
        jQuery(this.el.nativeElement).resizable(this.options);
    };
    return ResizableDirective;
}());
__decorate([
    core_1.Input('resizable'),
    __metadata("design:type", Object)
], ResizableDirective.prototype, "options", void 0);
ResizableDirective = __decorate([
    core_1.Directive({
        selector: '[resizable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ResizableDirective);
exports.ResizableDirective = ResizableDirective;
//# sourceMappingURL=resizable.directive.js.map