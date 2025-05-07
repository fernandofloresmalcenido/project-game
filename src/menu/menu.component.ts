import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  startGame() {
    console.log('Game started!');
  }

  showScores() {
    console.log('Showing scores');
  }

  openSettings() {
    console.log('Opening settings');
  }

  exitGame() {
    console.log('Exiting game');
  }
}