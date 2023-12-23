import { TaskStatus } from '../domain/entities/task.entity';
import { TaskRepository } from '../domain/repositories/task.repository';

export class ReadAllCompletedTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute() {
    return this.taskRepository.findAll(TaskStatus.COMPLETED);
  }
}
