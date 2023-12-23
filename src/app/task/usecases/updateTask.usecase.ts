import { TaskEntity } from '../domain/entities/task.entity';
import { TaskID, TaskRepository } from '../domain/repositories/task.repository';

export class UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: TaskID, datasource: TaskEntity) {
    return this.taskRepository.update(id, datasource);
  }
}
