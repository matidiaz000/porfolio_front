import { NgModule } from '@angular/core';

import { AbilitiesRouting } from './abilities.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    AbilitiesRouting,
]

import { AbilitiesComponent } from './abilities.component';
import { AbilitiesMainBoxComponent } from './main-box/main-box.component';

const Components = [
    AbilitiesComponent,
    AbilitiesMainBoxComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ]
})
export class AbilitiesModule { }