import {Component, OnInit, ContentChild} from '@angular/core';
import {ProfileService} from '../shared/services/profile.service';

@Component({
    selector: 'com-grandparent',
    templateUrl: 'app/com-grandparent/com-grandparent.component.html'
})

export class ComGrandparentComponent implements OnInit {
    @ContentChild(ContentChild) tpl: any;
    totalProfile: number = 0;
    constructor(private profileService: ProfileService) {}

    ngOnInit() {
        this.getProfile();
    }

    getProfile() {
        this.totalProfile = this.profileService.getTotalProfile();
        console.log(this.tpl);
    }
}
