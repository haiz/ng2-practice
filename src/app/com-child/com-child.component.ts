import { Component, OnInit, ViewContainerRef, ElementRef, ViewChild } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';

@Component({
    selector: 'com-child',
    templateUrl: 'app/com-child/com-child.component.html'
})

export class ComChildComponent implements OnInit {
    @ViewChild('tpl') tpl: any; // This is a TemplateRef
    @ViewChild('div') div: any; // This is a ElementRef
    @ViewChild('son') son: any; // This is a ComSonComponent
    totalProfile: number;
    constructor(private profileService: ProfileService, private _vcr: ViewContainerRef, private _el: ElementRef) { }

    ngOnInit() {
        this.totalProfile = this.profileService.getTotalProfile();
        console.log('init com-child');
        console.log(this._vcr);
        console.log(this._el);
    }

    addProfile() {
        this.profileService.addProfile(1);
        this.totalProfile = this.profileService.getTotalProfile();
        console.log('Adding a profile from child');
        console.log(this.tpl);
        console.log(this.div);
        console.log(this.son);
        this.son.iHave(); // call component function
        this._vcr.createEmbeddedView(this.tpl); // insert a template as a sibling element
        this._vcr.createEmbeddedView(this.div); // nothing happend
    }
}
