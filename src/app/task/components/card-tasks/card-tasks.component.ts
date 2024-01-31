import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { TaskEntity, TaskStatus } from '../../domain/entities/task.entity';
import { TaskFilter } from '../../domain/repositories/task.repository';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-card-tasks',
  standalone: true,
  imports: [],
  templateUrl: './card-tasks.component.html',
  styleUrl: './card-tasks.component.scss',
})
export class CardTasksComponent implements OnInit {
  @Input() filter!: TaskFilter;
  @Input() title!: string;

  private readonly taskService = inject(TaskService);

  protected taskList = signal<TaskEntity[]>([]);

  ngOnInit(): void {
    const taskList = this.findTaskList();

    this.taskList.set(taskList);
  }

  private findTaskList() {
    switch (this.filter) {
      case TaskStatus.CREATED:
        return this.taskService.findAllCreated();
      case TaskStatus.COMPLETED:
        return this.taskService.findAllCompleted();
      case TaskStatus.ABORTED:
        return this.taskService.findAllAborted();
      case true:
        return this.taskService.findAllActive();
      case false:
        return this.taskService.findAllInactive();
    }
  }
}
