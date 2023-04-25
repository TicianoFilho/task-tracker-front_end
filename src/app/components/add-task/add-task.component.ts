import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  description: string = "";
  day: string = "";
  reminder: boolean = true;
  showAddTask: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

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
