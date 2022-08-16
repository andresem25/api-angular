import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion/cancion';
import { ListaReproduccion } from './lista-reproduccion';
import { ListaReproduccionService } from './lista-reproduccion.service';

@Component({
  selector: 'app-lista-reproduccion',
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.css']
})
export class ListaReproduccionComponent implements OnInit {

  listaReproduccion:Set<ListaReproduccion>;

  constructor(private listaReproduccionService:ListaReproduccionService) { }

  ngOnInit(): void {
    this.listaReproduccionService.getAll().subscribe(
      lista => {
        this.listaReproduccion=lista;
      }      
    );
  }

  delete(listaReproduccion:ListaReproduccion): void{
    console.log("netra")
    this.listaReproduccionService.delete(listaReproduccion.idLista).subscribe(
      res => this.listaReproduccionService.getAll().subscribe(
        response => this.listaReproduccion = response
      )
    );
  }

}
