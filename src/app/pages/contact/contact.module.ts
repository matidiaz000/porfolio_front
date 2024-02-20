import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ContactRouting } from './contact.routing';
import { SharedModule } from './../../shared/shared.module';

const Modules = [
    SharedModule,
    ContactRouting,
]

import { ContactComponent } from './contact.component';
import { SvgDribbleComponent } from './svg/dribble';
import { SvgEmailComponent } from './svg/email';
import { SvgGithubComponent } from './svg/github';
import { SvgLinkedinComponent } from './svg/linkedin';

const Components = [
    ContactComponent,
    SvgDribbleComponent,
    SvgEmailComponent,
    SvgGithubComponent,
    SvgLinkedinComponent
]

@NgModule({
    imports: [ Modules ],
    declarations: [ Components ],
    exports: [],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactModule { }