import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CrudLibrosComponent = class CrudLibrosComponent {
    constructor(data_api, location, router) {
        this.data_api = data_api;
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
        this.listarLibros();
    }
    listarLibros() {
        this.data_api.mostrarLibros().subscribe((Respuesta) => (console.log(Respuesta)));
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