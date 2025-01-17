import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntesComponent } from './preguntes/preguntes.component';
import { HomeComponent } from './home/home.component';
import { EnhorabonaComponent } from './enhorabona/enhorabona.component';
import { LlistaeventsComponent } from './llistaevents/llistaevents.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inici - Quizz'
  },
  {
    path: 'preguntes/:tematica',
    component: PreguntesComponent,
    title: 'Preguntes - Quizz'
  },
  {
    path: 'enhorabona',
    component: EnhorabonaComponent,
    title: 'Enhorabona - Quizz'
  },
  {
    path: 'llistaevents',
    component: LlistaeventsComponent,
    title: 'Llista d\'esdeveniments - Quizz'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
