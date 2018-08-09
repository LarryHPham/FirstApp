import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProjectPage } from './project';

// sub pages
import { ProjectForgeViewerPage } from './project-forge-viewer/project-forge-viewer';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [
    ProjectPage,
    ProjectForgeViewerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
    TabsPageModule,
  ],
  entryComponents: [
    ProjectForgeViewerPage,
  ],
})

export class ProjectPageModule { }
