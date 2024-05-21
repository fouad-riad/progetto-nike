import { Component, OnInit } from '@angular/core';
import { ServizioNikeService } from '../../services/servizio-nike.service';
import { catchError, of, pipe } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent implements OnInit{
  errorMessage: "" | undefined;
constructor(private sn:ServizioNikeService){}
  ngOnInit(): void {
    this.sn.getAcquisto()
    .pipe(
      catchError((err:HttpErrorResponse) =>{
        this.errorMessage = err.error;
        return of(undefined);
      })
    )
    .subscribe(dati => console.log(dati))
  }
}
