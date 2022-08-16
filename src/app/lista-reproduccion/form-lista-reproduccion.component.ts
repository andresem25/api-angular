import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaReproduccion } from './lista-reproduccion';
import { ListaReproduccionService } from './lista-reproduccion.service';

@Component({
  selector: 'app-form-lista-reproduccion',
  templateUrl: './form-lista-reproduccion.component.html',
  styleUrls: ['./form-lista-reproduccion.component.css']
})
export class FormListaReproduccionComponent implements OnInit {

  listaReproduccion:ListaReproduccion = new ListaReproduccion();

  constructor(private listaReproduccionService:ListaReproduccionService, private router:Router) { }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.listaReproduccion);
    this.listaReproduccionService.create(this.listaReproduccion).subscribe(
      res => this.router.navigate(['/listaReproduccion'])
    );
  }

}
