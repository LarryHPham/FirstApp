import { Component } from '@angular/core';

/**
 * Generated class for the TaskBoardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-board',
  templateUrl: 'task-board.component.html'
})
export class TaskBoardComponent {

  text: string;

  constructor() {
    console.log('Hello TaskBoardComponent Component');
    this.text = 'TASK BOARD HERE';
  }

}
