import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';

import { CarouselImgSportComponent } from './components/carousel-img-sport/carousel-img-sport.component';
import { MembershipNikeComponent } from './components/membership-nike/membership-nike.component';
import { AltreCategorieComponent } from './components/altre-categorie/altre-categorie.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { DettaglioScarpaComponent } from './components/dettaglio-scarpa/dettaglio-scarpa.component';
import { CarelloComponent } from './components/carello/carello.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    ProdottiVetrinaComponent,

    CarouselImgSportComponent,
    MembershipNikeComponent,
    AltreCategorieComponent,
    FooterComponent,
    NuoviArriviComponent,
    DettaglioScarpaComponent,
    CarelloComponent,
    PagamentoComponent,
    ThankYouComponent,
    BestsellerComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
