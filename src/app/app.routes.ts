import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Task Clean',
    path: '',
    loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
  },
];
