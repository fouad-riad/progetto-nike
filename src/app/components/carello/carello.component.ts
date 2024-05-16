import { Component } from '@angular/core';
import { prodotto } from '../models/prodotto';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrl: './carello.component.css'
})
export class CarelloComponent {
  prodotto: prodotto | undefined;
  constructor(private sn:ServizioNikeService,private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.prodotto = this.sn.prodotti.find(item => item.id === +id);
    }
  }
  
  
}
