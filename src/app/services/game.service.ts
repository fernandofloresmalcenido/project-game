import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private record = 0;

  constructor() {
    // Cargar el récord desde localStorage al iniciar el servicio
    const savedRecord = localStorage.getItem(STORAGE_KEY);
    this.record = savedRecord ? parseInt(savedRecord, 10) : 0;
  }

  getRecord(): number {
    return this.record;
  }

  setRecord(rounds: number): void {
    if (rounds > this.record) {
      this.record = rounds;
      localStorage.setItem(STORAGE_KEY, this.record.toString());
    }
  }
}
