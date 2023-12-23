import { TaskStatus } from '../domain/entities/task.entity';
import { TaskRepository } from '../domain/repositories/task.repository';

export class ReadAllAbortedTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute() {
    return this.taskRepository.findAll(TaskStatus.ABORTED);
  }
}
