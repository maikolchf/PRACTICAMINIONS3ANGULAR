import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../Servicio/data-api.service';
import { Location, DOCUMENT } from '@angular/common';
import { LibroInterface } from '../model/Libro-interface';
import { RespuestaInterface } from '../model/Respuesta-interface';
import { Router, CanActivate } from '@angular/router';

import Swal from 'sweetalert2'
import { ReadVarExpr } from '@angular/compiler';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-crud-libros',
  templateUrl: './crud-libros.component.html',
  styleUrls: ['./crud-libros.component.css']
})

export class CrudLibrosComponent implements OnInit {
  public Libro: LibroInterface = {
    IdLibro: null,
    Codigo: ''
  };
  public Respuesta: RespuestaInterface;
  public RespuestaMensaje: RespuestaInterface;
  public imagen = null;
  public file:File;
  constructor( public data_api:DataApiService, private location:Location, private router:Router ) { 

  }

  ngOnInit(): void {
    this.listarLibros();
  }

  subirImg(img:FileList){     
    this.file = img.item(0);  
  }
  registrarLibros(LibroForm:NgForm):void{ 
    
    const uploadData = new FormData();       
    const formData: FormData = new FormData();
    formData.append('IdLibro', LibroForm.value.IdLibro);
    formData.append('Codigo', LibroForm.value.Codigo);
    formData.append('Titulo', LibroForm.value.Titulo);
    formData.append('Autor', LibroForm.value.Autor);
    formData.append('Precio', LibroForm.value.Precio);
    formData.append('LinkAmazon', LibroForm.value.LinkAmazon);
    formData.append('Imagen',this.file, this.file.name); 

    this.data_api.insertarLibro(formData).subscribe((Respuesta2:RespuestaInterface) =>{
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
        this.data_api.eliminarLibro(id).subscribe((Respuesta2:RespuestaInterface) =>{
          switch (Respuesta2[0]){
            case 'success':{
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
    });       
    this.listarLibros();
  }
  
  SeleccionarLibro(libro:LibroInterface){
    this.data_api.seleccionarLibro = Object.assign({},libro)
    console.log(libro)
  }
  listarLibros(){

    this.data_api.mostrarLibros().subscribe((Respuesta:RespuestaInterface) => (this.Respuesta = Respuesta));    
  }
}
