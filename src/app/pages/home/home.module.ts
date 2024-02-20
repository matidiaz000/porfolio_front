import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HomeRouting } from './home.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    HomeRouting,
]

import { HomeComponent } from './home.component';

const Components = [
    HomeComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }