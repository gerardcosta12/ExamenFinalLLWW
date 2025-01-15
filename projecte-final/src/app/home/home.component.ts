import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService } from '../event.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.registrarVisita('home').subscribe();
  }

  onClickButton() {
    this.eventService.registrarClick('button').subscribe();
  }

}
