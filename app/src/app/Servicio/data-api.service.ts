import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';
import { LibroInterface } from '../model/Libro-interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  Libros: Observable<any>;
  Libro:Observable<any>;

  public  seleccionarLibro: LibroInterface = {
    IdLibro:null,
    Codigo: '',
    Titulo: '',
    Autor: '',
    Precio: null,
    LinkAmazon: ''
  }

  constructor( private http:HttpClient ) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json",
  });

  mostrarLibros(){
    const url_api = 'http://localhost:2308/api/Libros';
    return this.http.get(url_api);
  }

  insertarLibro(libro: LibroInterface){    
    const url_api = 'http://localhost:2308/api/Libros';
    return (this.http.post(url_api, libro,{ headers:this.headers}))
    .pipe(map(data => data));
  }

  eliminarLibro(id:number){
    const url_api = `http://localhost:2308/api/Libros/${id}`;
    return (this.http.delete<LibroInterface>(url_api,{headers:this.headers}))
    .pipe(map(data => data))
  }
}
