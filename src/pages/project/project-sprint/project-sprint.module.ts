import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectSprintPage } from './project-sprint';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    ProjectSprintPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectSprintPage),
    ComponentsModule,
  ],
})
export class ProjectSprintPageModule {}
