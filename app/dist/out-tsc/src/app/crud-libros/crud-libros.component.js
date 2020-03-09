import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
let CrudLibrosComponent = class CrudLibrosComponent {
    constructor(data_api, location, router) {
        this.data_api = data_api;
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        this.listarLibros();
    }
    registrarLibros(LibroForm) {
        this.data_api.insertarLibro(LibroForm.value).subscribe(Libro => location.reload());
        switch (this.Respuesta.Estado) {
            case 'success': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'success');
                break;
            }
            case 'error': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'error');
                break;
            }
            case 'warning': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'warning');
                break;
            }
        }
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
    eliminarLibros() {
        switch (this.Respuesta.Estado) {
            case 'success': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'success');
                break;
            }
            case 'error': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'error');
                break;
            }
            case 'warning': {
                Swal.fire(this.Respuesta.Mensaje, String(this.Respuesta.ObjetoRespuesta), 'warning');
                break;
            }
        }
    }
    listarLibros() {
        this.data_api.mostrarLibros().subscribe((Respuesta) => (this.Respuesta = Respuesta));
    }
};
CrudLibrosComponent = __decorate([
    Component({
        selector: 'app-crud-libros',
        templateUrl: './crud-libros.component.html',
        styleUrls: ['./crud-libros.component.css']
    })
], CrudLibrosComponent);
export { CrudLibrosComponent };
//# sourceMappingURL=crud-libros.component.js.map