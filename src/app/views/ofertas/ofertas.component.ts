import { Component, OnInit } from '@angular/core';
import { Produtosofertas } from 'src/app/models/produtosofertas';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private ofertasServices:OfertasService) { }

  listaOfertas = [] as Produtosofertas[]

  ngOnInit(): void {
    this.carregaOfertas()
  }

  carregaOfertas(){
    this.ofertasServices.getOfertas().subscribe((ofertasRecebidas: Produtosofertas[]) =>{
      this.listaOfertas = ofertasRecebidas;
      console.log(this.listaOfertas)
    })
  }

}
