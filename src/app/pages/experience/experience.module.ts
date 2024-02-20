import { NgModule } from '@angular/core';

import { ExperienceRouting } from './experience.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    ExperienceRouting,
]

import { ExperienceComponent } from './experience.component';
import { ExperienceItemsComponent } from './items/items.component';

const Components = [
    ExperienceComponent,
    ExperienceItemsComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ]
})
export class ExperienceModule { }