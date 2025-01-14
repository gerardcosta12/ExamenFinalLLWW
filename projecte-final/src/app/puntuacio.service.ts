import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PuntuacioService {
  private puntuacioSubject = new BehaviorSubject<number>(0);
  puntuacio$ = this.puntuacioSubject.asObservable();

  private categoriesCompletades: Set<string> = new Set();
  private maxPunts: number = 6; // Màxim de punts

  constructor() {}

  actualitzarPuntuacio(puntuacio: number, categoria: string): void {
    if (!this.categoriesCompletades.has(categoria)) {
      const puntuacioActual = this.puntuacioSubject.getValue();
      const novaPuntuacio = puntuacioActual + puntuacio;
      this.puntuacioSubject.next(novaPuntuacio);
      this.categoriesCompletades.add(categoria);

      if (novaPuntuacio === this.maxPunts) {
        this.mostrarEnhorabona();
      }
    }
  }

  jaTePuntCategoria(categoria: string): boolean {
    return this.categoriesCompletades.has(categoria);
  }

  obtenirPuntuacioActual(): number {
    return this.puntuacioSubject.getValue();
  }

  private mostrarEnhorabona() {
    alert("🎉 Enhorabona! Has aconseguit la puntuació màxima! 🎉");
  }
}
