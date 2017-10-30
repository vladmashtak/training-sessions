import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { ExercisePlanComponent } from './containers/exercise-plan/exercise-plan.component';

const COMPONENTS = [
  ExercisePlanComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class TrainingSessionsModule {
  static forRoot() {
    return {
      ngModule: TrainingSessionsModule,
      providers: [],
    };
  }
}
