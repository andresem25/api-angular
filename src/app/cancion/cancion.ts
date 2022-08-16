import { ListaReproduccion } from "../lista-reproduccion/lista-reproduccion";

export class Cancion {

    idCancion:number;
	titulo:string;
	artista:string;
	album:string;
	anno:string;
	genero:string;
	listaReproduccion:Set<ListaReproduccion>;
}
