import {
  CreateTaskEntity,
  TaskEntity,
  TaskStatus,
} from '../entities/task.entity';

export type TaskID = string | number;

export type TaskFilter = boolean | TaskStatus;

export abstract class TaskRepository {
  abstract create(datasource: CreateTaskEntity): TaskEntity;
  abstract delete(id: TaskID): TaskEntity;
  abstract findAll(filter?: TaskFilter): TaskEntity[];
  abstract findOneById(id: TaskID): TaskEntity;
  abstract update(id: TaskID, datasource: TaskEntity): TaskEntity;
}
