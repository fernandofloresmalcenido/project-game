import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-over',
  standalone: true,
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {
  currentRounds = 0;
  record = 0;

  constructor(
    private router: Router,
    private gameService: GameService,
  ) {}

  ngOnInit() {
    // Obtener las rondas actuales desde el estado de la navegación
    const navigation = this.router.getCurrentNavigation();
    this.currentRounds = navigation?.extras?.state?.['currentRounds'] || 0;

    this.record = this.gameService.getRecord();
  }

  emitExit() {
    this.router.navigate(['/home']);
  }

  emitTryAgain() {
    this.router.navigate(['/gameplay']);
  }
}
