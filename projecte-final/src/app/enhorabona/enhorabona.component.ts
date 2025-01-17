import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-enhorabona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enhorabona.component.html',
  styleUrls: ['./enhorabona.component.css']
})
export class EnhorabonaComponent implements OnInit {
  message: string = '🎉 Enhorabona! Has completat totes les categories! 🎉';
  guanyadors: any[] = [];
  formData!: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.registrarVisita('enhorabona').subscribe();
    this.http.get<any[]>('http://localhost:3000/api/guanyadors/guanyadors').subscribe(data => {
      this.guanyadors = data;
    });

    this.formData = this.fb.group({
      nom: ['', Validators.required],
      cognom: ['', Validators.required],
      correu: ['', [Validators.required, Validators.email]]
    });
  }

  enviarFormulari() {
    if (this.formData.valid) {
      this.eventService.registrarClick('enhorabona-enviar').subscribe();
      this.http.post('http://localhost:3000/api/guanyadors/guanyador', this.formData.value).subscribe(response => {
        alert('Gràcies per participar!');
        this.formData.reset();
      });
    }
  }

  tancar(): void {
    this.eventService.registrarClick('enhorabona-tancar').subscribe();
    this.router.navigate(['/']);
  }
}
