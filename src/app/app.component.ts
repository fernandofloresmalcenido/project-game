import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onGameStarted() {
    console.log('El juego ha comenzado');
  }

  onShowScores() {
    console.log('Mostrando puntajes');
  }

  onOpenSettings() {
    console.log('Abriendo configuraciones');
  }

  onExitGame() {
    console.log('Saliendo del juego');
  }
}