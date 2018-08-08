import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskBoardPage } from './task-board';

@NgModule({
  declarations: [
    TaskBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskBoardPage),
  ],
})
export class TaskBoardPageModule {}
