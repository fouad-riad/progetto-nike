export class NuovoAcquistoProdottoDTO{
  constructor(
   public prodotto:prodotto,
   public userId:number,
  ){}
}



export type ProdottoAcquistato = {
  id:number;
  userId:number;
  prodotto:prodotto;
}



export type prodotto= {
    id: number
    nome: string
    categoria: string
    prezzo: number
    taglie_disponibili: string[]
    colori_disponibili: string[]
    descrizione: string
    immagine: string
    scarpa1?: string
    nuovo_arrivi?: boolean
    best_seller?: number
    Trend_della_settimana?:boolean
  }