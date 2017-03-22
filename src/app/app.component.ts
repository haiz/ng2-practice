import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showHeading = true;
  showPopup = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado', 'kaka'];
  // imgSrc = 'http://kenh14cdn.com/thumb_w/650/2017/photo-1-1489227741832-0-8-359-586-crop-1489284062974-1489339445734.jpg';
  // imgSrc = 'https://dummyimage.com/1400x400/ff8811/fff';
  imgSrc = 'https://dummyimage.com/200x2400/ff8811/fff';

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  togglePopup() {
    console.log(this.showPopup);
    this.showPopup = !this.showPopup;
  }
}
