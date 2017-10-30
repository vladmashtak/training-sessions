import { Routes } from '@angular/router';

import { CalendarComponent } from './containers/calendar/calendar.component';
import { ExerciseListComponent } from './containers/exercise-list/exercise-list.component';
import { ExerciseSessionComponent } from './containers/exercise-session/exercise-session.component';


const childrenRouting: Routes = [
  {
    path: 'calendar/:date',
    component: CalendarComponent,
    children: [
      {
        path: 'exercise-list',
        component: ExerciseListComponent
      },
      {
        path: 'exercise-list/:id',
        component: ExerciseSessionComponent
      }
    ]
  },
];

export const TrainingSessionsRoutes: Routes = [
  {
    path: 'users',
    children: childrenRouting
  },
  {
    path: 'users/:id',
    children: childrenRouting
  },
];
