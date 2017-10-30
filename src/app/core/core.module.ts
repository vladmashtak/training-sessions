import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

import { RootComponent } from './containers/root/root.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

const COMPONENTS = [
  RootComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
