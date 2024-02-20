import { HomeModule } from './home/home.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { ContactModule } from './contact/contact.module';
import { ExperienceModule } from './experience/experience.module';

export const PagesModules = [
    HomeModule,
    AbilitiesModule,
    ContactModule,
    ExperienceModule
]

import { AngularModules } from "./../shared/shared.config"
import { PagesRoutingModule } from './pages.routing';

export const Modules = [
	AngularModules,
    PagesRoutingModule,
    PagesModules
];