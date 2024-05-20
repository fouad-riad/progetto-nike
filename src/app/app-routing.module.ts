import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';

import { DettaglioScarpaComponent } from './components/dettaglio-scarpa/dettaglio-scarpa.component';
import { CarelloComponent } from './components/carello/carello.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';



const routes: Routes = [
  {path:'',component:HeroBannerComponent},

  {path:'nuoviarrivi',component:NuoviArriviComponent},
  {path:'bestseller',component:BestsellerComponent},
  {path:'dettaglioscarpa/:id',component:DettaglioScarpaComponent},
  {path:'carello',component:CarelloComponent},
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: '/carrello', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
