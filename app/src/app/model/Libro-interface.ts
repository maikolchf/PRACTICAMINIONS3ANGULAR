import { DecimalPipe } from '@angular/common';

export interface LibroInterface{
    IdLibro?: number,
    Codigo?: string,
    Titulo?: string,
    Autor?: string,
    Precio?: DecimalPipe,
    LinkAmazon?: string
    imagen?: string
}