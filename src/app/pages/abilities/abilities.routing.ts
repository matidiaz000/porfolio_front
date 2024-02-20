import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilitiesComponent } from './abilities.component';

const routes: Routes = [
    {
        path: '',
        component: AbilitiesComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AbilitiesRouting { }
