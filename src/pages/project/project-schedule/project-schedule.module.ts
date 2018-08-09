import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// sub pages
import { ProjectSchedulePage } from './project-schedule';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ProjectSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSchedulePage),
    ComponentsModule,
  ],
})
export class ProjectSchedulePageModule {}
