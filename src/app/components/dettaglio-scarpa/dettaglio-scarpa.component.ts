import { Component, OnInit } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { ServizioNikeService } from '../../services/servizio-nike.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dettaglio-scarpa',
  templateUrl: './dettaglio-scarpa.component.html',
  styleUrl: './dettaglio-scarpa.component.css'
})
export class DettaglioScarpaComponent implements OnInit {
  prodotto: prodotto | undefined;





  constructor(private sn: ServizioNikeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.prodotto = this.sn.prodotti.find(item => item.id === +id);
    }
  }
  tagliaSelezionata: string = '';
  erroreTaglia: string = '';
  mostraDettagliScarpa: boolean = false;

  selezionaTaglia(taglia: string) {
    this.tagliaSelezionata = taglia;
  }

  aggiungiAlCarrello() {
    if (!this.tagliaSelezionata) {
      this.erroreTaglia = "Si prega di selezionare una taglia prima di aggiungere al carrello.";
    } else {
      // Esegui l'aggiunta al carrello
      this.erroreTaglia = ''; // Resetta il messaggio di errore se la taglia è stata selezionata
      this.mostraDettagliScarpa = true;
    }
  }
  chiudiPopupDettagli() {
    this.mostraDettagliScarpa = false;
  }
  
  
  
  
 
  
}