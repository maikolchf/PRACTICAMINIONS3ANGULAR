import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-crud-libros',
  templateUrl: './crud-libros.component.html',
  styleUrls: ['./crud-libros.component.css'],
})
export class CrudLibrosComponent implements OnInit {
  public libro;
  submitted = false;
  
  constructor() {
    this.libro = {
      "txtCodigoLibro":"",
      "txtTituloLibro":"",
      "txtAutorLibro":"",
      "txtPrecioLibro":"",
      "txtLinkAmazon":""
    }
  }

  ngOnInit(): void {

  }
  guardarLibro(LibroForm){
    Swal.fire({
      title: 'Exito!',
      text: 'Se guardo el libro correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }
}

