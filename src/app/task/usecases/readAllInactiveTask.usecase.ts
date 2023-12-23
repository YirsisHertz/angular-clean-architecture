import { TaskRepository } from '../domain/repositories/task.repository';

export class ReadAllInactiveTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute() {
    return this.taskRepository.findAll(false);
  }
}
