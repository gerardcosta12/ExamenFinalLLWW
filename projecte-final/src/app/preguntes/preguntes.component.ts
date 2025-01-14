import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Pregunta, PreguntaService } from './preguntes.service';
import { PuntuacioService } from '../puntuacio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntes.component.html',
  styleUrls: ['./preguntes.component.css'],
})
export class PreguntesComponent implements OnInit {
  preguntes: Pregunta[] = [];
  preguntaActual: Pregunta | null = null;
  indexActual = 0;
  missatgeResultat: string | null = null;
  tematica: string = '';
  respostesBloquejades: boolean = false;

  puntuacioPerCategoria: { [key: string]: number } = {
    ciencia: 0,
    historia: 0,
    esports: 0,
    art: 0,
    geografia: 0,
    entreteniment: 0,
  };

  puntuacioTotal: number = 0;

  constructor(
    private preguntaService: PreguntaService,
    private route: ActivatedRoute,
    private puntuacioService: PuntuacioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tematica = this.route.snapshot.paramMap.get('tematica') || '';
    if (this.puntuacioService.jaTePuntCategoria(this.tematica)) {
      alert(`Ja has completat aquesta categoria!`);
      return;
    }
    this.carregarPreguntes();
  }

  carregarPreguntes(): void {
    this.preguntaService.obtenirPreguntes(this.tematica).subscribe(
      (data) => {
        this.preguntes = this.barrejarPreguntes(data);
        if (this.preguntes.length > 0) {
          this.preguntaActual = this.preguntes[this.indexActual];
        }
      },
      (error) => {
        console.error('Error al carregar les preguntes:', error);
      }
    );
  }

  barrejarPreguntes(preguntes: Pregunta[]): Pregunta[] {
    let array = [...preguntes];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  seleccionarOpcio(opcio: any): void {
    this.respostesBloquejades = true;

    if (opcio.correcta) {
      this.puntuacioPerCategoria[this.tematica]++;

      if (this.puntuacioPerCategoria[this.tematica] === 3) {
        if (this.puntuacioTotal < 6) {
          this.puntuacioService.actualitzarPuntuacio(1, this.tematica);
          this.missatgeResultat = `Correcte! Has aconseguit 1 punt per la categoria ${this.tematica}.`;
        }
      } else {
        this.missatgeResultat = 'Correcte!';
      }
    } else {
      this.missatgeResultat = `Incorrecte! La resposta correcta era: ${this.preguntaActual?.opcions.find(o => o.correcta)?.text}`;
    }


    if (this.puntuacioService.obtenirPuntuacioActual() === 6) {
      this.router.navigate(['/enhorabona']);
    }
  }

  seguentPregunta(): void {
    this.indexActual++;
    if (this.indexActual < this.preguntes.length) {
      this.preguntaActual = this.preguntes[this.indexActual];
      this.missatgeResultat = null;
      this.respostesBloquejades = false;
    } else {
      this.preguntaActual = null;
    }
  }
}

