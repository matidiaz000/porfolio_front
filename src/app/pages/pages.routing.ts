import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: "inicio",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'contacto',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'habilidades',
        loadChildren: () => import('./abilities/abilities.module').then(m => m.AbilitiesModule)
    },
    {
        path: 'experiencia',
        loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
    },
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: '**',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
