import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Opcio {
  text: string;
  correcta: boolean;
}

export interface Pregunta {
  _id: string;
  pregunta: string;
  opcions: Opcio[];
  tematica: string;
}

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  private apiUrl = 'http://localhost:3000/api/preguntes';

  constructor(private http: HttpClient) {}

  obtenirPreguntes(tematica?: string): Observable<Pregunta[]> {
    const url = tematica ? `${this.apiUrl}?tematica=${tematica}` : this.apiUrl;
    console.log('URL per obtenir preguntes:', url);
    return this.http.get<Pregunta[]>(url);
  }

  afegirPregunta(pregunta: Pregunta): Observable<Pregunta> {
    return this.http.post<Pregunta>(this.apiUrl, pregunta);
  }

  actualitzarPregunta(id: string, pregunta: Pregunta): Observable<Pregunta> {
    return this.http.put<Pregunta>(`${this.apiUrl}/${id}`, pregunta);
  }

  eliminarPregunta(id: string): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.apiUrl}/${id}`);
  }
}
