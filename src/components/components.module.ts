import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { TaskBoardComponent } from './task-board/task-board.component';
@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
    	TaskBoardComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
    	TaskBoardComponent,
	]
})
export class ComponentsModule {}
