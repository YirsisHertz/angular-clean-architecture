import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss',
})
export class CreateTaskFormComponent implements OnInit {
  private readonly taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.create({
      title: 'First Task',
      description: 'Testing first task!!!',
    });
  }
}
