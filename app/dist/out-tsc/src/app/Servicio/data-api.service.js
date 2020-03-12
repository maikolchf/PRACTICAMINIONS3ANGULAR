import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
let DataApiService = class DataApiService {
    constructor(http) {
        this.http = http;
        this.seleccionarLibro = {
            IdLibro: null,
            Codigo: '',
            Titulo: '',
            Autor: '',
            Precio: null,
            LinkAmazon: ''
        };
        this.headers = new HttpHeaders({
            "Content-Type": "application/json",
        });
    }
    mostrarLibros() {
        const url_api = 'http://localhost:2308/api/Libros';
        return this.http.get(url_api);
    }
    insertarLibro(libro) {
        const url_api = 'http://localhost:2308/api/Libros';
        return (this.http.post(url_api, libro, { headers: this.headers }))
            .pipe(map(data => data));
    }
};
DataApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataApiService);
export { DataApiService };
//# sourceMappingURL=data-api.service.js.map