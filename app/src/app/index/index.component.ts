import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../Servicio/data-api.service';
import { RespuestaInterface } from '../model/Respuesta-interface'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public Respuesta:RespuestaInterface;
  constructor(private data_api:DataApiService) { }

  ngOnInit(): void {
    this.listarLibros();
  }
  listarLibros(){
    this.data_api.mostrarLibros().subscribe((Respuesta:RespuestaInterface) => (this.Respuesta = Respuesta));    
  }

}
