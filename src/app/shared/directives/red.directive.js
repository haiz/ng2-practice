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
var RedDirective = (function () {
    function RedDirective(el) {
        this.el = el;
        this.defaultColor = 'red';
        this.setColor(this.defaultColor);
    }
    RedDirective.prototype.onMouseEnter = function () {
        this.setColor('blue');
    };
    RedDirective.prototype.onMouseLeave = function () {
        this.setColor(this.defaultColor);
    };
    RedDirective.prototype.setColor = function (color) {
        this.el.nativeElement.style.color = color;
    };
    return RedDirective;
}());
RedDirective = __decorate([
    core_1.Directive({
        selector: '[red]',
        host: {
            '(mouseenter)': 'onMouseEnter($event.target)',
            '(mouseleave)': 'onMouseLeave($event.target)'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], RedDirective);
exports.RedDirective = RedDirective;
//# sourceMappingURL=red.directive.js.map