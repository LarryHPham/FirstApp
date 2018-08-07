import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProjectPage } from '../../pages/project/project';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }

  test() {
    this.navCtrl.setRoot(ProjectPage);
  };
}
