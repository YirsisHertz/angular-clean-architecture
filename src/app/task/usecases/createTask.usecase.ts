import { CreateTaskEntity } from '../domain/entities/task.entity';
import { TaskRepository } from '../domain/repositories/task.repository';

export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(datasource: CreateTaskEntity) {
    return this.taskRepository.create(datasource);
  }
}
