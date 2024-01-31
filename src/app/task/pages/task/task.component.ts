import { Component } from '@angular/core';
import { CardTasksComponent } from '../../components/card-tasks/card-tasks.component';
import { CreateTaskFormComponent } from '../../components/create-task-form/create-task-form.component';
import { TaskStatus } from '../../domain/entities/task.entity';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CreateTaskFormComponent, CardTasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  protected readonly taskStatus = TaskStatus;
}
