import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private record = 0;
  private readonly STORAGE_KEY = 'highestRecord';

  constructor() {
    // Cargar el récord desde localStorage al iniciar el servicio
    const savedRecord = localStorage.getItem(this.STORAGE_KEY);
    this.record = savedRecord ? parseInt(savedRecord, 10) : 0;
  }

  getRecord(): number {
    return this.record;
  }

  setRecord(rounds: number): void {
    if (rounds > this.record) {
      this.record = rounds;
      localStorage.setItem(this.STORAGE_KEY, this.record.toString());
    }
  }
}
