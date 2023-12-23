import { TaskID, TaskRepository } from '../domain/repositories/task.repository';

export class DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: TaskID) {
    return this.taskRepository.delete(id);
  }
}
