import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntosColombiaComponent } from './project/pages/puntos-colombia/puntos-colombia.component';
import { UberComponent } from './project/pages/uber/uber.component';

const routes: Routes = [
  {
    path: '',
    component: UberComponent
  },
  {
    path: 'puntos',
    component: PuntosColombiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
