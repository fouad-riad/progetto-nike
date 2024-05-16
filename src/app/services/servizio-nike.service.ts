import { Injectable } from '@angular/core';
import { PRODOTTI } from '../components/dati/nike';
import { prodotto } from '../components/models/prodotto';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServizioNikeService {
   
  prodotti: prodotto[]=PRODOTTI
  private tagliaSelezionataSource = new BehaviorSubject<number | null>(null);
  private mostraPopupSource = new BehaviorSubject<boolean>(false);

  tagliaSelezionata = this.tagliaSelezionataSource.asObservable();
  mostraPopup = this.mostraPopupSource.asObservable();

  constructor() { }

  updateTagliaSelezionata(taglia: number) {
    this.tagliaSelezionataSource.next(taglia);
  }

  togglePopup(mostra: boolean) {
    this.mostraPopupSource.next(mostra);

  }
  
}
