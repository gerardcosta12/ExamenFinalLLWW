import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PuntuacioService } from '../puntuacio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentScore: number = 0;

  constructor(private puntuacioService: PuntuacioService) {
    this.puntuacioService.puntuacio$.subscribe((puntuacio) => {
      this.currentScore = puntuacio;
    });
  }
}

