import {Injectable} from '@angular/core';

@Injectable()
export class ProfileService {
    private profiles: any[] = [];

    addProfile(profile?: any) {
        if (profile) {
            this.profiles.push(profile);
        }
    }

    getTotalProfile() {
        return this.profiles.length;
    }
}
