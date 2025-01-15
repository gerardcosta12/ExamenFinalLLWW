import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionId: string = '';

  constructor() {
    this.sessionId = this.generarSessionId();
  }

  generarSessionId(): string {
    return Math.random().toString(36).substr(2, 9);  // Generem un ID aleatori
  }

  getSessionId(): string {
    return this.sessionId;
  }
}
