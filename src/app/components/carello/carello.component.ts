import { Component, OnInit } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { ServizioNikeService } from '../../services/servizio-nike.service';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
  carrello: { prodotto: prodotto, taglia: string }[] = [];
  totale: number = 0;
  constructor(private sn: ServizioNikeService) {}

  ngOnInit(): void {
    this.sn.getCarrello().subscribe(carrello => {
      this.carrello = carrello;
      console.log('Carrello ricevuto dal servizio:', this.carrello);
    });

    this.sn.totale.subscribe(totale => {
      this.totale = totale;
      console.log('Totale aggiornato:', this.totale);
    });
  }
  

  checkout() {
    alert('Checkout completato! Grazie per il tuo acquisto.');
    // Resetta il carrello nel servizio
    this.sn.resetCarrello();
  }
    rimuoviProdotto(index: number) {
    console.log('Rimozione prodotto in posizione:', index);
    this.sn.rimuoviDalCarrello(index);
  }
  
  
}
