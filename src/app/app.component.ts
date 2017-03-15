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
  imgSrc = 'http://kenh14cdn.com/thumb_w/650/2017/photo-1-1489227741832-0-8-359-586-crop-1489284062974-1489339445734.jpg';

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
