import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { title } from 'process';
import { GameOverComponent } from './game-over/game-over.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Simon Says - Home'}, 
    },
    {
        path: 'gameplay',
        loadComponent: () => import('./gameplay/gameplay.component').then(
            m => m.GameplayComponent
        ),
        data: {title: 'Simon Says - Game'}, 
    },
    {
        path: 'game-over',
        component: GameOverComponent,
        data: {title: 'Simon Says - Game Over'}, 
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {title: 'Simon Says - Not Found'}, 
    },
];
