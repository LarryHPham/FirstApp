import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

// import { ProjectForgeViewerPage } from './project-forge-viewer/project-forge-viewer';
import { ProjectSchedulePage } from './project-schedule/project-schedule';
import { ProjectSprintPage } from './project-sprint/project-sprint';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})

export class ProjectPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [
    {title: 'Task Board', pageName: 'Task Board Page', tabComponent:'TaskBoardPage', index:0, icon: 'home'},
    {title: 'Schedule', pageName: 'Schedule Page', tabComponent:'SchedulePage', index:0, icon: 'contacts'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // set our app's pages
      console.log('Project Level Pages', this.pages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  openPage(page: PageInterface) {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.tabComponent);
  }

  isActive(page: PageInterface) {

  }

}
