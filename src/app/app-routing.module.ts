import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { DettaglioScarpaComponent } from './components/dettaglio-scarpa/dettaglio-scarpa.component';
import { CarelloComponent } from './components/carello/carello.component';



const routes: Routes = [
  {path:'',component:HeroBannerComponent},

  {path:'nuoviarrivi',component:NuoviArriviComponent},
  {path:'dettaglioscarpa/:id',component:DettaglioScarpaComponent},
  {path:'carello',component:CarelloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
