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
var ComGrandparentComponent = (function () {
    function ComGrandparentComponent(profileService) {
        this.profileService = profileService;
        this.totalProfile = 0;
    }
    ComGrandparentComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ComGrandparentComponent.prototype.getProfile = function () {
        this.totalProfile = this.profileService.getTotalProfile();
    };
    return ComGrandparentComponent;
}());
ComGrandparentComponent = __decorate([
    core_1.Component({
        selector: 'com-grandparent',
        templateUrl: 'app/com-grandparent/com-grandparent.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ComGrandparentComponent);
exports.ComGrandparentComponent = ComGrandparentComponent;
//# sourceMappingURL=com-grandparent.component.js.map