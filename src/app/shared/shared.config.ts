import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export const AngularModules = [
  CommonModule,
  RouterModule,
  HttpClientModule
];

export const Modules = [
  AngularModules,
];

import { HeaderComponent } from './components/header/header.component';
import { MainBoxComponent } from './components/main-box/main-box.component';
import { MobileModalComponent } from './components/mobile-modal/mobile-modal.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';

export const Components = [
  HeaderComponent,
  MainBoxComponent,
  MobileModalComponent,
  MobileNavComponent
];

import { HorizontalScrollDirective } from './directives/horizontalScroll.directive';

export const Directives = [
  HorizontalScrollDirective
]