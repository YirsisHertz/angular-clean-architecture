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

  // Eliminacion Logica
  delete(id: TaskID): TaskEntity {
    const task = this.findOneById(id);
    const deletedTask = this.update(id, { ...task!, active: false });

    return deletedTask;
  }

  // Eliminacion fisica
  // delete(id: TaskID): TaskEntity {
  //   const task = this.findOneById(id);
  //   const taskList = this.findAll();

  //   const taskIndex = taskList.findIndex((task) => task.id === id);

  //   const deleteTask = taskList.splice(taskIndex, 1);

  //   localStorage.setItem(this.storageKey, JSON.stringify(taskList));

  //   return deleteTask[0];
  // }

  findAll(filter?: TaskFilter): TaskEntity[] {
    const taskList: TaskEntity[] =
      JSON.parse(localStorage.getItem(this.storageKey)!) || [];

    if (filter === undefined) {
      return taskList;
    }

    if (filter && taskList.length <= 0) {
      throw new Error(`Task with status ${filter} is empty`);
    }

    const taskListFiltered = taskList.filter(
      (task) => task.status === filter || task.active === filter
    );

    return taskListFiltered;
  }

  findOneById(id: TaskID): TaskEntity | undefined {
    const taskList: TaskEntity[] =
      JSON.parse(localStorage.getItem(this.storageKey)!) || [];

    const task = taskList.find((task) => task.id === id);

    return task;
  }

  update(id: TaskID, datasource: TaskEntity): TaskEntity {
    const task = this.findOneById(id);
    const taskList = this.findAll();

    const taskIndex = taskList.findIndex((task) => task.id === id);

    const taskUpdated = { ...task!, ...datasource };

    taskList[taskIndex] = taskUpdated;

    localStorage.setItem(this.storageKey, JSON.stringify(taskList));

    return taskUpdated;
  }
}
