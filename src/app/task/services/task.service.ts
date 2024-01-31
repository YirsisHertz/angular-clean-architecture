import { Injectable, signal } from '@angular/core';
import { CreateTaskEntity, TaskEntity } from '../domain/entities/task.entity';
import { TaskID } from '../domain/repositories/task.repository';
import { TaskInLocalStorageModel } from '../models/taskInLocalStorage.model';
import { CreateTaskUseCase } from '../usecases/createTask.usecase';
import { DeleteTaskUseCase } from '../usecases/deleteTask.usecase';
import { ReadAllAbortedTaskUseCase } from '../usecases/readAllAbortedTask.usecase';
import { ReadAllActiveTaskUseCase } from '../usecases/readAllActiveTask.usecase';
import { ReadAllCreatedTaskUseCase } from '../usecases/readAllCreatedTask.usecase';
import { ReadAllInactiveTaskUseCase } from '../usecases/readAllInactiveTask.usecase';
import { ReadOneTaskByIdUseCase } from '../usecases/readOneTaskById.usecase';
import { ReadAllCompletedTaskUseCase } from '../usecases/realAllCompletedTask.usecase';
import { UpdateTaskUseCase } from '../usecases/updateTask.usecase';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly taskInLocalStorageModel = new TaskInLocalStorageModel();

  private _taskList = signal<TaskEntity[]>([]);

  constructor() {}

  create(datasource: CreateTaskEntity) {
    return new CreateTaskUseCase(this.taskInLocalStorageModel).execute(
      datasource
    );
  }

  findOneById(id: TaskID) {
    return new ReadOneTaskByIdUseCase(this.taskInLocalStorageModel).execute(id);
  }

  findAllCreated() {
    return new ReadAllCreatedTaskUseCase(
      this.taskInLocalStorageModel
    ).execute();
  }

  findAllAborted() {
    return new ReadAllAbortedTaskUseCase(
      this.taskInLocalStorageModel
    ).execute();
  }

  findAllCompleted() {
    return new ReadAllCompletedTaskUseCase(
      this.taskInLocalStorageModel
    ).execute();
  }

  findAllActive() {
    return new ReadAllActiveTaskUseCase(this.taskInLocalStorageModel).execute();
  }

  findAllInactive() {
    return new ReadAllInactiveTaskUseCase(
      this.taskInLocalStorageModel
    ).execute();
  }

  update(id: TaskID, datasource: TaskEntity) {
    return new UpdateTaskUseCase(this.taskInLocalStorageModel).execute(
      id,
      datasource
    );
  }

  delete(id: TaskID) {
    return new DeleteTaskUseCase(this.taskInLocalStorageModel).execute(id);
  }

  get taskList() {
    return this._taskList;
  }
}
