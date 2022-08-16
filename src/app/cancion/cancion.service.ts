import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancion } from './cancion';
import { Observable } from 'rxjs';
import { ListaReproduccion } from '../lista-reproduccion/lista-reproduccion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private url:string="http://localhost:8080/api/cancion";

  constructor(private http:HttpClient) { }

  //listar Canciones
  getAll():Observable<Set<Cancion>>{
    return this.http.get<Set<Cancion>>(this.url);
  }

  //Crear cancion
  create(cancion:Cancion):Observable<Cancion>{
    return this.http.post<Cancion>(this.url,cancion);
  }

  //Obtener una cancion
  get(idCancion:number):Observable<Cancion>{
    return this.http.get<Cancion>(this.url+'/'+idCancion);
  }

  //Borrar cancion
  delete(idCancion:number):Observable<Cancion>{
    return this.http.delete<Cancion>(this.url+'/'+idCancion);
  }

  //Obtener las listas asociadas a una cancion
  getListaReproduccion(idCancion:number):Observable<Set<ListaReproduccion>>{
    return this.http.get<Set<ListaReproduccion>>(this.url+'/'+idCancion+'/listaReproduccion');
  }

}
