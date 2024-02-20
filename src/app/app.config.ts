import { BrowserModule } from '@angular/platform-browser';

const AngularModules = [
  BrowserModule
]

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

export const Modules = [
  AngularModules,
  SharedModule,
  PagesModule
]

import { AppComponent } from './app.component';

export const Bootstrap = AppComponent;