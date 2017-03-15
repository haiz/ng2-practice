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
var profile_service_1 = require("../shared/services/profile.service");
var ComChildComponent = (function () {
    function ComChildComponent(profileService, _vcr, _el) {
        this.profileService = profileService;
        this._vcr = _vcr;
        this._el = _el;
    }
    ComChildComponent.prototype.ngOnInit = function () {
        this.totalProfile = this.profileService.getTotalProfile();
        console.log('init com-child');
        console.log(this._vcr);
        console.log(this._el);
    };
    ComChildComponent.prototype.addProfile = function () {
        this.profileService.addProfile(1);
        this.totalProfile = this.profileService.getTotalProfile();
        console.log('Adding a profile from child');
        console.log(this.tpl);
        console.log(this.div);
        console.log(this.son);
        this.son.iHave(); // call component function
        this._vcr.createEmbeddedView(this.tpl); // insert a template as a sibling element
        this._vcr.createEmbeddedView(this.div); // nothing happend
    };
    return ComChildComponent;
}());
__decorate([
    core_1.ViewChild('tpl'),
    __metadata("design:type", Object)
], ComChildComponent.prototype, "tpl", void 0);
__decorate([
    core_1.ViewChild('div'),
    __metadata("design:type", Object)
], ComChildComponent.prototype, "div", void 0);
__decorate([
    core_1.ViewChild('son'),
    __metadata("design:type", Object)
], ComChildComponent.prototype, "son", void 0);
ComChildComponent = __decorate([
    core_1.Component({
        selector: 'com-child',
        templateUrl: 'app/com-child/com-child.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService, core_1.ViewContainerRef, core_1.ElementRef])
], ComChildComponent);
exports.ComChildComponent = ComChildComponent;
//# sourceMappingURL=com-child.component.js.map