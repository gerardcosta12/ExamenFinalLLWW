import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-llistaevents',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
