import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cancion } from './cancion';
import { CancionService } from './cancion.service';

@Component({
  selector: 'app-form-cancion',
  templateUrl: './form-cancion.component.html',
  styleUrls: ['./form-cancion.component.css']
})
export class FormCancionComponent implements OnInit {

  cancion:Cancion = new Cancion();

  constructor(private cancionService:CancionService, private router:Router) { }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.cancion);
    this.cancionService.create(this.cancion).subscribe(
      res => this.router.navigate(['/cancion'])
    );
  }

}
