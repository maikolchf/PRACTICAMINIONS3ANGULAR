import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CrudLibrosComponent } from './crud-libros/crud-libros.component';
import { DataApiService } from './Servicio/data-api.service';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { FormularioBusquedaComponent } from './formulario-busqueda/formulario-busqueda.component';

const rutas:Routes =[
  { path:'Libros', component: CrudLibrosComponent },
  { path:'', component: IndexComponent, pathMatch:'full' },
  { path:'**', redirectTo: '/' , pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    CrudLibrosComponent,
    FormularioLibroComponent,
    FormularioBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
