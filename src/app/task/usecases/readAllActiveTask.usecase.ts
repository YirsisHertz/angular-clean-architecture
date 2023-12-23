import { TaskRepository } from '../domain/repositories/task.repository';

export class ReadAllActiveTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute() {
    return this.taskRepository.findAll(true);
  }
}
