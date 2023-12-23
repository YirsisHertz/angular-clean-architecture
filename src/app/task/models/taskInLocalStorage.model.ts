import { createTaskDatasourceAdapter } from '../adapters/datasource/createTaskDatasource.adapter';
import {
  CreateTaskEntity,
  TaskEntity,
  TaskStatus,
} from '../domain/entities/task.entity';
import {
  TaskFilter,
  TaskID,
  TaskRepository,
} from '../domain/repositories/task.repository';

export class TaskInLocalStorageModel extends TaskRepository {
  private readonly storageKey: string = 'task';

  create(datasource: CreateTaskEntity): TaskEntity {
    const taskList = this.findAll();

    const task = createTaskDatasourceAdapter(datasource);

    taskList.push(task);

    localStorage.setItem(this.storageKey, JSON.stringify(taskList));

    return task;
  }

  delete(id: TaskID): TaskEntity {
    const task = this.findOneById(id);

    localStorage.removeItem(`${task}`);

    return task;
  }

  findAll(filter?: TaskFilter): TaskEntity[] {
    return JSON.parse(localStorage.getItem(this.storageKey)!) || [];
  }

  findOneById(id: TaskID): TaskEntity {
    const task: TaskEntity = JSON.parse(
      localStorage.getItem(this.storageKey) || ''
    );

    return task;
  }

  update(id: TaskID, datasource: TaskEntity): TaskEntity {
    throw new Error('Method not implemented.');
  }
}
