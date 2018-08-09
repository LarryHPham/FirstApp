import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams, Nav, PopoverController } from 'ionic-angular';

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
    {title: 'Sprints', pageName: 'ProjectSprintPage', tabComponent: 'ProjectSprintPage', index: 0, icon: 'home'},
    {title: 'Schedule', pageName: 'ProjectSchedulePage', tabComponent: 'ProjectSchedulePage', index: 1, icon: 'contacts'},
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    // public platform: Platform,
    // public statusBar: StatusBar,
    // public splashScreen: SplashScreen,
  ) {
      // platform.ready().then(() => {
      //   statusBar.styleDefault();
      //   splashScreen.hide();
      // });
      // set our app's pages
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = {tabIndex: page.index};
    }

    this.nav.setRoot(page.tabComponent, params);
  }

  // presentPopover(myEvent, p) {
  //   let popover = this.popoverCtrl.create(p.tabComponent, {});
  //   popover.present({
  //     ev:myEvent
  //   })
  // }

  isActive(page: PageInterface) {

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }

}
