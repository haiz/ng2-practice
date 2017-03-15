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
var sorter_1 = require("../shared/utils/sorter");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(sorter) {
        this.sorter = sorter;
        this.sortReverse = false;
        this.sortProperty = '';
    }
    EmployeeListComponent.prototype.sort = function (prop) {
        this.sortProperty = prop;
        this.sortReverse = !this.sortReverse;
        this.sorter.sort(this.employees, prop);
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-list',
        templateUrl: 'employee-list.component.html',
        styleUrls: ['employee-list.component.css'],
        providers: [sorter_1.Sorter],
    }),
    __metadata("design:paramtypes", [sorter_1.Sorter])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.js.map