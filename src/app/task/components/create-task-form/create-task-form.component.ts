import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss',
})
export class CreateTaskFormComponent implements OnInit {
  @Output() onCreateTask = new EventEmitter();

  private readonly taskService = inject(TaskService);
  private readonly fb = inject(FormBuilder);

  protected taskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // console.log(task);
    // this.taskService.update(task.id, {
    //   ...task,
    //   title: 'La tarea se actualizo',
    // });
    // const task = this.taskService.findOneById(
    //   'fe15a868-61f7-4642-85f0-d2dc7e6501a3'
    // );
    // if (!task) throw new Error(`Task not found`);
    // const deletedTask = this.taskService.delete(task.id);
    // console.log(deletedTask);
  }

  private validateForm() {
    return this.taskForm.valid;
  }

  protected create() {
    const isValid = this.validateForm();

    if (!isValid) {
      throw new Error(`Form is not valid`);
    }

    this.taskService.create({
      title: this.taskForm.get('title')!.value!,
      description: this.taskForm.get('description')!.value!,
    });

    this.onCreateTask.emit();

    this.taskForm.reset();
  }
}
