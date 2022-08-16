import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancion } from '../cancion/cancion';
import { ListaReproduccionService } from './lista-reproduccion.service';

@Component({
  selector: 'app-lista-reproduccion-cancion',
  templateUrl: './lista-reproduccion-cancion.component.html',
  styleUrls: ['./lista-reproduccion-cancion.component.css']
})
export class ListaReproduccionCancionComponent implements OnInit {

  listaCanciones:Set<Cancion>;

  constructor(private listaReproduccionService:ListaReproduccionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      param=>{
        let idLista = param['idLista'];
        if(idLista){
          this.listaReproduccionService.getCanciones(idLista).subscribe(
            lista => this.listaCanciones = lista
          );
        }
      }
    );
  }

}
