import { Component, OnInit } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-scarpa',
  templateUrl: './dettaglio-scarpa.component.html',
  styleUrls: ['./dettaglio-scarpa.component.css']
})
export class DettaglioScarpaComponent implements OnInit {
  prodotto: prodotto | undefined;
  tagliaSelezionata: string | null = null;
  erroreTaglia: string = '';
  mostraDettagliScarpa: boolean = false;

  constructor(private sn: ServizioNikeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.prodotto = this.sn.prodotti.find(item => item.id === +id);
    }

    this.sn.tagliaSelezionata.subscribe(t => this.tagliaSelezionata = t);
    this.sn.mostraPopup.subscribe(m => this.mostraDettagliScarpa = m);
  }

  selezionaTaglia(taglia: string) {
    this.sn.updateTagliaSelezionata(taglia);
  }

  aggiungiAlCarrello() {
    if (this.tagliaSelezionata === null) {
      this.erroreTaglia = "Si prega di selezionare una taglia prima di aggiungere al carrello.";
    } else if (this.prodotto) {
      this.erroreTaglia = ''; // Resetta il messaggio di errore se la taglia è stata selezionata
      this.sn.aggiungiAlCarrello(this.prodotto, this.tagliaSelezionata);
      this.mostraDettagliScarpa = true;
    }
  }

  chiudiPopupDettagli() {
    this.sn.togglePopup(false);
  }
}
