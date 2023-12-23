import { TaskID, TaskRepository } from '../domain/repositories/task.repository';

export class ReadOneTaskByIdUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: TaskID) {
    return this.taskRepository.findOneById(id);
  }
}
