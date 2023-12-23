import { Component } from '@angular/core';
import { CreateTaskFormComponent } from '../../components/create-task-form/create-task-form.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CreateTaskFormComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {}
