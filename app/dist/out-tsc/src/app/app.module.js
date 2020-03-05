import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CrudLibrosComponent } from './crud-libros/crud-libros.component';
import { DataApiService } from './Servicio/data-api.service';
const rutas = [
    { path: 'Libros', component: CrudLibrosComponent },
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            IndexComponent,
            NavbarComponent,
            FooterComponent,
            CrudLibrosComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            RouterModule.forRoot(rutas),
            FormsModule,
            HttpClientModule
        ],
        providers: [DataApiService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map