import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../Servicio/data-api.service';
import { RespuestaInterface } from '../model/Respuesta-interface'
import { LibroInterface } from '../model/Libro-interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public Respuesta:RespuestaInterface;
  public Libro: LibroInterface;
  constructor(public data_api:DataApiService) { }

  ngOnInit(): void {
    this.listarLibros();
  }
  listarLibros(){
    this.data_api.mostrarLibros().subscribe((Respuesta:RespuestaInterface) => (this.Respuesta = Respuesta));    
  }
  SeleccionarLibro(libro:LibroInterface){
    this.data_api.seleccionarLibro = Object.assign({},libro)
    console.log(libro)
  }
}
