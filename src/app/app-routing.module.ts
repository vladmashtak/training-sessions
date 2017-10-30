import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingSessionsRoutes } from './training-sessions';
import { NotFoundComponent } from './core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exercise-plan'
  },
  {
    path: '',
    children: TrainingSessionsRoutes
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
