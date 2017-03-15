import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';
import { ComSonComponent } from './com-son.component';

@Component({
    selector: 'com-child',
    templateUrl: 'app/com-child/com-child.component.html'
})

export class ComChildComponent implements OnInit {
    totalProfile: number;
    constructor(private profileService: ProfileService, private _vcr: ViewContainerRef) { }

    ngOnInit() {
        this.totalProfile = this.profileService.getTotalProfile();
        console.log('init com-child');
        console.log(this._vcr);
    }

    addProfile() {
        this.profileService.addProfile();
        this.totalProfile = this.profileService.getTotalProfile();
    }
}
