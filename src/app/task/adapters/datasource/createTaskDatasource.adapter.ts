import { v4 as uuid } from 'uuid';

import {
  CreateTaskEntity,
  TaskEntity,
  TaskStatus,
} from '../../domain/entities/task.entity';

export const createTaskDatasourceAdapter = (
  datasource: CreateTaskEntity
): TaskEntity => {
  const { title, description } = datasource;

  return {
    id: uuid(),
    active: true,
    status: TaskStatus.CREATED,
    title,
    description,
  };
};
