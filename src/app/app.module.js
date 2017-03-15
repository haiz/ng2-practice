"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { DraggableModule } from './ng2-draggable';
var app_component_1 = require("./app.component");
var popup_preview_component_1 = require("./popup-preview/popup-preview.component");
var com_grandparent_component_1 = require("./com-grandparent/com-grandparent.component");
var com_parent_component_1 = require("./com-parent/com-parent.component");
var com_child_component_1 = require("./com-child/com-child.component");
var myhighlighter_directive_1 = require("./shared/directives/myhighlighter.directive");
var color_directive_1 = require("./shared/directives/color.directive");
var red_directive_js_1 = require("./shared/directives/red.directive.js");
var draggable_directive_1 = require("./shared/directives/draggable.directive");
var previewable_directive_1 = require("./shared/directives/previewable.directive");
var resizable_directive_1 = require("./shared/directives/resizable.directive");
var profile_service_1 = require("./shared/services/profile.service");
// import { Sorter } from './shared/utils/sorter';
// import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
// import { TrimPipe } from './shared/pipes/trim.pipe';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [
            app_component_1.AppComponent,
            popup_preview_component_1.PopupPreviewComponent,
            com_grandparent_component_1.ComGrandparentComponent,
            com_parent_component_1.ComParentComponent,
            com_child_component_1.ComChildComponent,
            myhighlighter_directive_1.MyhighlighterDirective,
            color_directive_1.ColorDirective,
            red_directive_js_1.RedDirective,
            draggable_directive_1.DraggableDirective,
            previewable_directive_1.PreviewableDirective,
            resizable_directive_1.ResizableDirective,
        ],
        providers: [
            profile_service_1.ProfileService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map