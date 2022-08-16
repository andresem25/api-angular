import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaReproduccion } from './lista-reproduccion';
import { Cancion } from '../cancion/cancion';

@Injectable({
  providedIn: 'root'
})
export class ListaReproduccionService {

  private url:string="http://localhost:8080/api/listaReproduccion";
  constructor(private http:HttpClient) { }

  //Listas de reproduccion
  getAll():Observable<Set<ListaReproduccion>>{
    return this.http.get<Set<ListaReproduccion>>(this.url);
  }

  //Crear Lista de reproduccion
  create(listaReproduccion:ListaReproduccion):Observable<ListaReproduccion>{
    return this.http.post<ListaReproduccion>(this.url,listaReproduccion);
  }

  //Obtener una lista de reproduccion
  get(idLista:number):Observable<ListaReproduccion>{
    return this.http.get<ListaReproduccion>(this.url+'/'+idLista);
  }

  //Borrar lista de reproduccion
  delete(idLista:number):Observable<ListaReproduccion>{
    return this.http.delete<ListaReproduccion>(this.url+'/'+idLista);
  }

  //Obtener las canciones de una lista
  getCanciones(idLista:number):Observable<Set<Cancion>>{
    return this.http.get<Set<Cancion>>(this.url+'/'+idLista+'/canciones');
  }

  //Agregar Lista de reproduccion y canciones
  addListaCanciones(listaReproduccion:ListaReproduccion):Observable<ListaReproduccion>{
    return this.http.post<ListaReproduccion>(this.url,listaReproduccion);
  }
}
