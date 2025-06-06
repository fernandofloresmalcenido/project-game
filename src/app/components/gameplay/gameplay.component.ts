import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss'],
})
export class GameplayComponent implements OnInit {
  buttons = ['red', 'green', 'blue', 'yellow'];
  sequence: string[] = [];
  userSequence: string[] = [];
  round = 0;
  isPlaying = false;
  speed = 1000;
  repeatCount = 3;
  hasUserStarted = false;

  constructor(
    private router: Router,
    private gameService: GameService,
  ) {}

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.round = 0;
    this.sequence = [];
    this.userSequence = [];
    this.repeatCount = 3;
    this.hasUserStarted = false;
    this.nextRound();
  }

  nextRound() {
    this.round++;
    this.userSequence = [];
    this.sequence.push(this.buttons[Math.floor(Math.random() * 4)]);
    this.speed = Math.max(300, 1000 - this.round * 100);
    this.hasUserStarted = false;
    this.playSequence();
  }

  playSequence() {
    this.isPlaying = true;
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.sequence.length) {
        this.highlightButton(this.sequence[i]);
        i++;
      } else {
        clearInterval(interval);
        this.isPlaying = false;
      }
    }, this.speed);
  }

  highlightButton(color: string) {
    const button = document.querySelector(`.${color}`) as HTMLElement;

    const originalColor = button.style.backgroundColor;
    button.style.backgroundColor = this.lightenColor(color);
    setTimeout(() => {
      button.style.backgroundColor = originalColor;
    }, this.speed / 2);
  }

  lightenColor(color: string): string {
    const lightenFactor = 0.65;
    switch (color) {
      case 'red':
        return `rgb(255, ${Math.min(255, 255 * lightenFactor)}, ${Math.min(255, 255 * lightenFactor)})`;
      case 'green':
        return `rgb(${Math.min(255, 255 * lightenFactor)}, 255, ${Math.min(255, 255 * lightenFactor)})`;
      case 'blue':
        return `rgb(${Math.min(255, 255 * lightenFactor)}, ${Math.min(255, 255 * lightenFactor)}, 255)`;
      case 'yellow':
        return `rgb(255, 255, ${Math.min(255, 255 * lightenFactor)})`;
      default:
        return color;
    }
  }

  buttonClicked(color: string) {
    if (!this.isPlaying) {
      if (!this.hasUserStarted) {
        this.hasUserStarted = true;
      }
      this.userSequence.push(color);
      this.checkSequence();
    }
  }

  handleKeyUp(event: KeyboardEvent, color: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.buttonClicked(color);
    }
  }

  checkSequence() {
    const index = this.userSequence.length - 1;
    let isCorrect = true;
    if (this.userSequence[index] !== this.sequence[index]) {
      this.gameService.setRecord(this.round - 1);
      this.router.navigate(['/game-over'], {
        state: { currentRounds: this.round - 1 },
      });
      isCorrect = false;
    }
    if (isCorrect && this.userSequence.length === this.sequence.length) {
      setTimeout(() => this.nextRound(), 500);
    }
  }

  repeatSequence() {
    if (this.repeatCount > 0 && !this.isPlaying && !this.hasUserStarted) {
      this.repeatCount--;
      this.playSequence();
    }
  }
}
