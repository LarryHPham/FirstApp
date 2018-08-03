import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';

// sub pages
import { ProjectForgeViewerPage } from './project-forge-viewer/project-forge-viewer';
import { ProjectSchedulePageModule } from './project-schedule/project-schedule.module';

@NgModule({
  declarations: [
    ProjectPage,
    ProjectForgeViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    ProjectSchedulePageModule
  ],
})
export class ProjectPageModule {}
