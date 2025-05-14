import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GameOverComponent } from './components/game-over/game-over.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Simon Says - Home', 
    },
    {
        path: 'gameplay',
        loadComponent: () => import('./components/gameplay/gameplay.component').then(
            m => m.GameplayComponent
        ),
        title: 'Simon Says - Game', 
    },
    {
        path: 'game-over',
        component: GameOverComponent,
        title: 'Simon Says - Game Over', 
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Simon Says - Not Found', 
    },
];
