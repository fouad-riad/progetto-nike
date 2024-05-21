import { Injectable } from '@angular/core';
import { PRODOTTI } from '../components/dati/nike';
import { ProdottoAcquistato, prodotto } from '../components/models/prodotto';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServizioNikeService {
  prodotti: prodotto[] = PRODOTTI;
  
  private tagliaSelezionataSource = new BehaviorSubject<string | null>(null);
  private mostraPopupSource = new BehaviorSubject<boolean>(false);
  private carrelloSource = new BehaviorSubject<{ prodotto: prodotto, taglia: string }[]>([]);
  private totaleSource = new BehaviorSubject<number>(0);

  tagliaSelezionata = this.tagliaSelezionataSource.asObservable();
  mostraPopup = this.mostraPopupSource.asObservable();
  totale = this.totaleSource.asObservable();
  
  
  
  constructor( private http: HttpClient,private as:AuthService) {
    const carrelloSalvato = localStorage.getItem('carrello');
    if (carrelloSalvato) {
      const carrello = JSON.parse(carrelloSalvato);
      this.carrelloSource.next(carrello);
      this.calcolaTotale(carrello);
    }
  }

  updateTagliaSelezionata(taglia: string) {
    this.tagliaSelezionataSource.next(taglia);
  }

  togglePopup(mostra: boolean) {
    this.mostraPopupSource.next(mostra);
  }

  aggiungiAlCarrello(prodotto: prodotto, taglia: string) {
    const carrelloAttuale = this.carrelloSource.value;
    const nuovoCarrello = [...carrelloAttuale, { prodotto, taglia }];
    this.carrelloSource.next(nuovoCarrello);
    this.saveCarrelloToLocalStorage(nuovoCarrello);
    console.log('Prodotto aggiunto al carrello:', { prodotto, taglia });
    this.calcolaTotale(nuovoCarrello);
    
  }

  resetCarrello() {
    this.carrelloSource.next([]);
    localStorage.removeItem('carrello');
    console.log('Carrello resettato');
    this.totaleSource.next(0);
  }

  getCarrello() {
    return this.carrelloSource.asObservable();
    console.log('Recupero carrello:', this.carrelloSource.value);
  }
    rimuoviDalCarrello(index: number) {
    const carrelloAttuale = this.carrelloSource.value;
    carrelloAttuale.splice(index, 1);
    this.carrelloSource.next(carrelloAttuale);
    this.saveCarrelloToLocalStorage(carrelloAttuale);
    console.log('Prodotto rimosso dal carrello, nuovo carrello:', carrelloAttuale);
    this.calcolaTotale(carrelloAttuale);
  }

  private saveCarrelloToLocalStorage(carrello: { prodotto: prodotto, taglia: string }[]) {
    localStorage.setItem('carrello', JSON.stringify(carrello));
  }
  private calcolaTotale(carrello: { prodotto: prodotto, taglia: string }[]) {
    const totale = carrello.reduce((acc, item) => acc + item.prodotto.prezzo, 0);
    this.totaleSource.next(totale);
  }
  getAcquisto() : Observable<ProdottoAcquistato[]> {

  const user ={
    headers: new HttpHeaders ({
      Autrorization : "Bearer" + this.as.getLoggedUser()?.accessToken    
    })
  };
  return this.http.get<ProdottoAcquistato[]>(
    `${environment.JSON_SERVER_BASE_URL}/prodotto?userId=` + this.as.getLoggedUser()?.user.id,
    user
  );
}
  }

 
  

