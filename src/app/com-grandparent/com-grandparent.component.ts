import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../shared/services/profile.service';

@Component({
    selector: 'com-grandparent',
    templateUrl: 'app/com-grandparent/com-grandparent.component.html'
})

export class ComGrandparentComponent implements OnInit {
    totalProfile: number = 0;
    constructor(private profileService: ProfileService) {}
    
    ngOnInit() {
        this.getProfile();
    }

    getProfile() {
        this.totalProfile = this.profileService.getTotalProfile();
    }
}
