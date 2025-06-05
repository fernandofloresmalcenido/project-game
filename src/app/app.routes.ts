import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    title: 'Simon Says - Home',
  },
  {
    path: 'gameplay',
    loadComponent: () =>
      import('./components/gameplay/gameplay.component').then(
        (m) => m.GameplayComponent,
      ),
    title: 'Simon Says - Game',
  },
  {
    path: 'game-over',
    loadComponent: () =>
      import('./components/game-over/game-over.component').then(
        (m) => m.GameOverComponent,
      ),
    title: 'Simon Says - Game Over',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Simon Says - Not Found',
  },
];
