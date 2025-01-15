import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-llistaevents',
  templateUrl: './llistaevents.component.html',
  styleUrls: ['./llistaevents.component.css']
})
export class LlistaeventsComponent implements OnInit {
  events: any[] = [];
  filtersForm!: FormGroup;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.filtersForm = this.fb.group({
      dataInici: [''],
      dataFinal: [''],
      llocEvent: [''],
      tipusEvent: ['']
    });

    this.carregarEsdeveniments();
  }

  carregarEsdeveniments(): void {
    const filters = this.filtersForm.value;
    this.eventService.obtenirUltimsEsdeveniments(filters).subscribe(data => {
      this.events = data;
    });
  }

  aplicarFiltres(): void {
    this.carregarEsdeveniments();
  }
}
