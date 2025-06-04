import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public router: Router) {}

  onShowScores() {
    console.log('Mostrando puntajes');
  }

  onOpenSettings() {
    console.log('Abriendo configuraciones');
  }

  goToGameplay() {
    this.router.navigateByUrl('/gameplay');
  }

  exitGame() {
    window.close();
  }
}
