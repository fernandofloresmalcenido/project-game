import {Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() title: string = 'Menu'; // Recibe el título desde el padre

  @Output() gameStarted = new EventEmitter<void>(); // Emite evento para "Play"
  @Output() scoresRequested = new EventEmitter<void>(); // Emite evento para "Scores"
  @Output() settingsOpened = new EventEmitter<void>(); // Emite evento para "Settings"
  @Output() gameExited = new EventEmitter<void>(); // Emite evento para "Exit"

  startGame() {
    this.gameStarted.emit(); // Emite evento al padre
  }

  showScores() {
    this.scoresRequested.emit();
  }

  openSettings() {
    this.settingsOpened.emit();
  }

  exitGame() {
    this.gameExited.emit();
  }

}