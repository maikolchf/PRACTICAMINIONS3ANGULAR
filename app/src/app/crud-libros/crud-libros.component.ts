import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../Servicio/data-api.service';
import { Location, DOCUMENT } from '@angular/common';
import { LibroInterface } from '../model/Libro-interface';
import { RespuestaInterface } from '../model/Respuesta-interface';
import { Router, CanActivate } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-crud-libros',
  templateUrl: './crud-libros.component.html',
  styleUrls: ['./crud-libros.component.css']
})

export class CrudLibrosComponent implements OnInit {

  constructor( public data_api:DataApiService, private location:Location, private router:Router ) { }
  public Libro: LibroInterface;
  public Respuesta: RespuestaInterface;

  ngOnInit(): void {
    this.listarLibros();
  }

  listarLibros(){

    this.data_api.mostrarLibros().subscribe((Respuesta:RespuestaInterface) => (this.Respuesta = Respuesta));
  }


}
