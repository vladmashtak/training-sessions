import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule, RootComponent } from './core';
import { TrainingSessionsModule } from './training-sessions';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    TrainingSessionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
