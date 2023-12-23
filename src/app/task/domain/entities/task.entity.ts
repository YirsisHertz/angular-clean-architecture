export enum TaskStatus {
  CREATED = 'created',
  COMPLETED = 'completed',
  ABORTED = 'aborted',
}

export interface TaskEntity {
  active: boolean;
  title: string;
  description: string;
  status: TaskStatus;
  id: string;
}

export interface CreateTaskEntity {
  title: string;
  description: string;
}
