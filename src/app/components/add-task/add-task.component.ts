import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  description: string = "";
  day: string = "";
  reminder: boolean = false;

  onSubmit() {
    if (!this.description.trim()) {
      alert('Please add the description!');
      return;
    }

    const newTask: Task = {
      text: this.description,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.setFieldsAsEmpty();

  }

  private setFieldsAsEmpty() {
    this.description = "";
    this.day = "";
    this.reminder = false;
  }

}
