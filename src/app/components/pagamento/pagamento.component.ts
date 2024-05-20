import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { prodotto } from '../models/prodotto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  carrello: { prodotto: prodotto, taglia: string }[] = [];
  totale: number = 0;
  pagamentoForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private sn: ServizioNikeService,
    private router: Router
  ) {
    // Inizializza il form con i controlli e le validazioni
    this.pagamentoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      cognome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      indirizzo: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      carta: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]]
    });
  }

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
  get nome() { return this.pagamentoForm.get('nome'); }
  get cognome() { return this.pagamentoForm.get('cognome'); }
  get indirizzo() { return this.pagamentoForm.get('indirizzo'); }
  get carta() { return this.pagamentoForm.get('carta'); }

  confermaPagamento() {
    console.log('Conferma pagamento chiamato'); // Log di debug

    if (this.pagamentoForm.valid) {
      console.log('Form valido, resetto il carrello e navigo'); // Log di debug

      this.sn.resetCarrello();
      this.router.navigate(['/thank-you']).then(success => {
        if (success) {
          console.log('Navigazione riuscita'); // Log di debug
        } else {
          console.error('Navigazione fallita'); // Log di debug
        }
      }).catch(err => {
        console.error('Errore durante la navigazione', err); // Log di debug
      });
    } else {
      console.log('Form non valido, mostra errori'); // Log di debug
      this.pagamentoForm.markAllAsTouched();
    }
  }
}
