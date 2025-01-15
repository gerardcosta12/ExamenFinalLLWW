import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  obtenirUltimsEsdeveniments(filters: any): Observable<any[]> {
    const params = {
      dataInici: filters.dataInici,
      dataFinal: filters.dataFinal,
      llocEvent: filters.llocEvent,
      tipusEvent: filters.tipusEvent
    };
    return this.http.get<any[]>(`${this.apiUrl}/ultims-events`, { params });
  }

  registrarVisita(llocEvent: string): Observable<any> {
    const sessionId = this.sessionService.getSessionId();
    return this.http.post(this.apiUrl + '/event', { sessionId, llocEvent, tipusEvent: 'visita' });
  }

  registrarClick(llocEvent: string): Observable<any> {
    const sessionId = this.sessionService.getSessionId();
    return this.http.post(this.apiUrl + '/event', { sessionId, llocEvent, tipusEvent: 'click' });
  }
}
