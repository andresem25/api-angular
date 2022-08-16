import { Cancion } from "../cancion/cancion";

export class ListaReproduccion {
    idLista: number;
	nombre: string;
	descripcion: string;
    canciones: Set<Cancion>;
}
