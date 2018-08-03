import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// sub pages
import { ProjectSchedulePage } from './project-schedule';

@NgModule({
  declarations: [
    ProjectSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSchedulePage),
  ],
})
export class ProjectSchedulePageModule {}
