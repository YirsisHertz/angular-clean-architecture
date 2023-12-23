import { Injectable } from '@angular/core';
import { CreateTaskUseCase } from '../usecases/createTask.usecase';
import { TaskInLocalStorageModel } from '../models/taskInLocalStorage.model';
import { CreateTaskEntity } from '../domain/entities/task.entity';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly taskInLocalStorageModel = new TaskInLocalStorageModel();

  constructor() {}

  create(datasource: CreateTaskEntity) {
    return new CreateTaskUseCase(this.taskInLocalStorageModel).execute(
      datasource
    );
  }
}
