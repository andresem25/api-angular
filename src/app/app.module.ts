import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';
import { CancionComponent } from './cancion/cancion.component';
import { FormListaReproduccionComponent } from './lista-reproduccion/form-lista-reproduccion.component';
import { FormCancionComponent } from './cancion/form-cancion.component';
import { ListaReproduccionCancionComponent } from './lista-reproduccion/lista-reproduccion-cancion.component';

const routes:Routes=[
  {path:'', redirectTo:'lista-reproduccion', pathMatch:'full'},
  {path:'listaReproduccion', component:ListaReproduccionComponent},
  {path:'listaReproduccion/agregar', component:FormListaReproduccionComponent},
  {path:'listaReproduccion/:idLista/canciones', component:ListaReproduccionCancionComponent},
  {path:'cancion', component:CancionComponent},
  {path:'cancion/agregar', component:FormCancionComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListaReproduccionComponent,
    CancionComponent,
    FormListaReproduccionComponent,
    FormCancionComponent,
    ListaReproduccionCancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
