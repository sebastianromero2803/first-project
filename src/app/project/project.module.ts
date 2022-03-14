import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PuntosColombiaComponent } from "./pages/puntos-colombia/puntos-colombia.component";
import { UberComponent } from "./pages/uber/uber.component";



@NgModule({
  declarations: [UberComponent, PuntosColombiaComponent],
  imports: [CommonModule, FormsModule, RouterModule, NgbModule],
  exports: [UberComponent, PuntosColombiaComponent]
})
export class ProjectModule {}
