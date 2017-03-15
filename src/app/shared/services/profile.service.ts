import {Injectable} from '@angular/core';

@Injectable()
export class ProfileService {
    private totalProfile: number = 0;

    addProfile() {
        this.totalProfile += 1;
    }

    getTotalProfile() {
        return this.totalProfile;
    }
}