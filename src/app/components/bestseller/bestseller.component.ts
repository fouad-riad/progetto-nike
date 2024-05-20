import { Component } from '@angular/core';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { PRODOTTI } from '../dati/nike';
import { prodotto } from '../models/prodotto';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrl: './bestseller.component.css'
})
export class BestsellerComponent {
  
    prodotti: prodotto[]=PRODOTTI ;
  constructor (private sn:ServizioNikeService){}
    ngOnInit(): void {
      this.prodotti = this.sn.prodotti;
    }
    filtraProdottiBestseller(): any[] {
      return this.prodotti.filter(prodotto => prodotto.best_seller);
    }
  
  }

