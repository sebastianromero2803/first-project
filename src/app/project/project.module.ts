import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PuntosColombiaComponent } from "./pages/puntos-colombia/puntos-colombia.component";
import { UberComponent } from "./pages/uber/uber.component";
import { CardComponent } from './pages/uber/card/card.component';
import { CardService } from './pages/uber/services/card.service';



@NgModule({
  declarations: [UberComponent, PuntosColombiaComponent, CardComponent],
  imports: [CommonModule, FormsModule, RouterModule, NgbModule],
  exports: [UberComponent, PuntosColombiaComponent],
  providers: [CardService]
})
export class ProjectModule {}
