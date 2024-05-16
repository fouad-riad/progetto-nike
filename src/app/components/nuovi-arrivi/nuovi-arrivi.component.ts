import { Component } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { PRODOTTI } from '../dati/nike';
import { ServizioNikeService } from '../../services/servizio-nike.service';

@Component({
  selector: 'app-nuovi-arrivi',
  templateUrl: './nuovi-arrivi.component.html',
  styleUrl: './nuovi-arrivi.component.css'
})
export class NuoviArriviComponent {
  prodotti: prodotto[]=PRODOTTI ;
constructor (private sn:ServizioNikeService){}
  ngOnInit(): void {
    this.prodotti = this.sn.prodotti;
  }
  filtraProdottiNuoviArrivi(): any[] {
    return this.prodotti.filter(prodotto => prodotto.nuovo_arrivi);
  }

}
