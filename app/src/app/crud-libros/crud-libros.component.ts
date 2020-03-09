import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../Servicio/data-api.service';
import { Location, DOCUMENT } from '@angular/common';
import { LibroInterface } from '../model/Libro-interface';
import { RespuestaInterface } from '../model/Respuesta-interface';
import { Router, CanActivate } from '@angular/router';

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
  }
  limpiarCampos(){
    
  }
  registrarLibros(LibroForm:NgForm):void{

    this.data_api.insertarLibro(LibroForm.value).subscribe((Respuesta2:RespuestaInterface) =>{
      console.log(Respuesta2);
      switch (Respuesta2[0]){
        case 'success':
          {
            Swal.fire(
              Respuesta2[2],
              '',
              Respuesta2[0]
            ) 
            break; 
          }
          case 'error':{
            Swal.fire(
              Respuesta2[2],
              '',
              Respuesta2[0]
            ) 
            break; 
          }
          case 'warning':{
            Swal.fire(
              Respuesta2[2],
              '',
              Respuesta2[0]
            ) 
            break; 
          }
      }
      this.listarLibros();
    });
  }

  eliminarLibros(id:number){
    Swal.fire({
      title: 'Quieres eliminar este Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      
      if (result.value) {
                
      }        
    });       
    
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
