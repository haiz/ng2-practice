// This directive is for testing

import {Directive, ViewContainerRef, AfterViewInit} from '@angular/core';

@Directive({
    selector: '[dir-empty]'
})

export class DirEmptyDirective implements AfterViewInit {
    constructor(private _vcr: ViewContainerRef) {}

    ngAfterViewInit() {
        console.log('after view init "empty" directive');
        console.log(this._vcr);
    }
}
