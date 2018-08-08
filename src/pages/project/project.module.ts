import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProjectPage } from './project';

// sub pages
import { ProjectForgeViewerPage } from './project-forge-viewer/project-forge-viewer';
import { ProjectSchedulePage } from './project-schedule/project-schedule';
import { ProjectSprintPage } from './project-sprint/project-sprint';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [
    ProjectPage,
    ProjectForgeViewerPage,
    ProjectSchedulePage,
    ProjectSprintPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    TabsPageModule,
  ],
  entryComponents: [
    ProjectForgeViewerPage,
    ProjectSchedulePage,
    ProjectSprintPage,
  ],
})

export class ProjectPageModule { }
