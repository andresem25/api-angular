import { Component, OnInit } from '@angular/core';
import { Cancion } from './cancion';
import { CancionService } from './cancion.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  listaCanciones:Set<Cancion>;

  constructor(private cancionService:CancionService) { }

  ngOnInit(): void {
    this.cancionService.getAll().subscribe(
      lista => {
        this.listaCanciones=lista;
      }      
    );
  }

  delete(cancion:Cancion): void{
    this.cancionService.delete(cancion.idCancion).subscribe(
      res => this.cancionService.getAll().subscribe(
        response => this.listaCanciones = response
      )
    );
  }

}
