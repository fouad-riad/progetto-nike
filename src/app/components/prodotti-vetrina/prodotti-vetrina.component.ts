import { Component, OnInit} from '@angular/core';

import { PRODOTTI } from '../dati/nike';
import {  prodotto } from '../models/prodotto';
import { ServizioNikeService } from '../../services/servizio-nike.service';


@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit  {
prodotti: prodotto[]=PRODOTTI ;
constructor (private sn:ServizioNikeService){}
  ngOnInit(): void {
    this.prodotti = this.sn.prodotti;
  }
    
 
  // Metodo per filtrare i prodotti con trend della settimana
  Trenddellasettimana(): any[] {
    return this.prodotti.filter(prodotto => prodotto.Trend_della_settimana);
  }
  }

