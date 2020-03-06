import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../Servicio/data-api.service';
import { Location, DOCUMENT } from '@angular/common';
import { LibroInterface } from '../model/Libro-interface';
import { RespuestaInterface } from '../model/Respuesta-interface';
import { Router, CanActivate } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-crud-libros',
  templateUrl: './crud-libros.component.html',
  styleUrls: ['./crud-libros.component.css']
})

export class CrudLibrosComponent implements OnInit {
  public Libro: LibroInterface;
  public Respuesta: RespuestaInterface;
  public RespuestaMensaje: RespuestaInterface;
  constructor( public data_api:DataApiService, private location:Location, private router:Router ) { 

  }

  ngOnInit(): void {
    this.listarLibros();
    this.RespuestaMensaje.Estado = '';
    this.RespuestaMensaje.Mensaje = '';
  }

  registrarLibros(LibroForm:NgForm):void{
    this.data_api.insertarLibro(LibroForm.value).subscribe((Respuesta2:RespuestaInterface) => (this.RespuestaMensaje = Respuesta2));
    console.log(this.RespuestaMensaje.Estado);
    switch (this.RespuestaMensaje.Estado){
      case 'success':{
        Swal.fire(
          this.RespuestaMensaje.Mensaje,
          String(this.RespuestaMensaje.ObjetoRespuesta),
          'success'
        ) 
        break; 
      }
      case 'error':{
        Swal.fire(
          this.RespuestaMensaje.Mensaje,
          String(this.RespuestaMensaje.ObjetoRespuesta),
          'error'
        ) 
        break; 
      }
      case 'warning':{
        Swal.fire(
          this.RespuestaMensaje.Mensaje,
          String(this.RespuestaMensaje.ObjetoRespuesta),
          'warning'
        ) 
        break; 
      }
    }
    this.listarLibros();
  }

 /* guardarLibros(){
    switch (this.Respuesta.Estado){
      case 'success':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'success'
        ) 
        break; 
      }
      case 'error':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'error'
        ) 
        break; 
      }
      case 'warning':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'warning'
        ) 
        break; 
      }
    }
  }*/
  
  eliminarLibros(){
    switch (this.Respuesta.Estado){
      case 'success':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'success'
        ) 
        break; 
      }
      case 'error':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'error'
        ) 
        break; 
      }
      case 'warning':{
        Swal.fire(
          this.Respuesta.Mensaje,
          String(this.Respuesta.ObjetoRespuesta),
          'warning'
        ) 
        break; 
      }
    }
  }
  listarLibros(){

    this.data_api.mostrarLibros().subscribe((Respuesta:RespuestaInterface) => (this.Respuesta = Respuesta));
  }


}
