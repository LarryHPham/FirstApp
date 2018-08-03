import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { ProjectForgeViewerPage } from './project-forge-viewer/project-forge-viewer';
import { ProjectSchedulePage } from './project-schedule/project-schedule';
import { ProjectSprintPage } from './project-sprint/project-sprint';
/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage = ProjectSchedulePage;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // set our app's pages
      this.pages = [
        { title: 'Project Schedule Page', component: ProjectSchedulePage },
        { title: 'Project Sprint Page', component: ProjectSprintPage },
      ];
      console.log('Project Level Pages', this.pages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  openPage(page) {
    // navigate to the new page if it is not the current page
    console.log(this.nav);
    console.log(page.component);
    this.nav.setRoot(page.component);
  }

}
