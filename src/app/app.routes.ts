import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'gameplay',
        loadComponent: () => import('./gameplay/gameplay.component').then(
            m => m.GameplayComponent
        ),
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
