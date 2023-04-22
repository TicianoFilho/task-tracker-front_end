import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faTimes = faTimes;

  @Input() task: Task = {text: "", day: "", reminder: false,}
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

}
