import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtosofertas } from '../models/produtosofertas';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  url = "http://localhost:3000/produtosofertas"

  constructor(private httpClient: HttpClient) { }
  
  getOfertas(): Observable<Produtosofertas[]>{
    return this.httpClient.get<Produtosofertas[]>(this.url)
  }

}
