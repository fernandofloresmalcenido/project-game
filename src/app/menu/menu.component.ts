import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
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

  // Método del ciclo de vida: ngOnChanges
  ngOnChanges() {
    console.log('ngOnChanges - Cambios en @Input detectados', this.title);
  }

  // Método del ciclo de vida: ngOnInit
  ngOnInit() {
    console.log('ngOnInit - Componente inicializado');
  }

  // Método del ciclo de vida: ngDoCheck
  ngDoCheck() {
    console.log('ngDoCheck - Ciclo de detección de cambios');
  }

  // Método del ciclo de vida: ngAfterContentInit
  ngAfterContentInit() {
    console.log('ngAfterContentInit - Contenido proyectado inicializado');
  }

  // Método del ciclo de vida: ngAfterContentChecked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - Contenido proyectado verificado');
  }

  // Método del ciclo de vida: ngAfterViewInit
  ngAfterViewInit() {
    console.log('ngAfterViewInit - Vista inicializada');
  }

  // Método del ciclo de vida: ngAfterViewChecked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - Vista verificada');
  }

  // Método del ciclo de vida: ngOnDestroy
  ngOnDestroy() {
    console.log('ngOnDestroy - Componente destruido');
  }
}
