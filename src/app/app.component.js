"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.showHeading = true;
        this.showPopup = true;
        this.heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado', 'kaka'];
        this.imgSrc = 'http://kenh14cdn.com/thumb_w/650/2017/photo-1-1489227741832-0-8-359-586-crop-1489284062974-1489339445734.jpg';
    }
    AppComponent.prototype.toggleHeading = function () {
        this.showHeading = !this.showHeading;
    };
    AppComponent.prototype.togglePopup = function () {
        this.showPopup = !this.showPopup;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map