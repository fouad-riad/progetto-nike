import { Component } from '@angular/core';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { PRODOTTI } from '../dati/nike';
import { prodotto } from '../models/prodotto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 prodotto:prodotto | undefined;
 

  constructor(private sn: ServizioNikeService) { }

  
}
