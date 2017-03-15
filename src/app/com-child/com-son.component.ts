import {Component} from '@angular/core';

@Component({
    selector: 'com-son',
    template: '<span>I am a boy</span>'
})

export class ComSonComponent {
    iHave() {
        console.log('I have a bird');
    }
}
