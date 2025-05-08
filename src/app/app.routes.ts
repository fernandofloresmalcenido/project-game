import { Routes } from '@angular/router';
import { GameplayComponent } from './gameplay/gameplay.component';

export const routes: Routes = [
    {
        path: '',
        component: GameplayComponent,
    },
    {
        path: 'gameplay',
        loadComponent: () => import('./gameplay/gameplay.component').then(
            m => m.GameplayComponent
        ),
    },
];
