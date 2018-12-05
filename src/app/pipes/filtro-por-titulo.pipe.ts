import { Pipe, PipeTransform } from '@angular/core';
import { FotoAPI } from '../model/api/FotoAPI';

@Pipe({
  name: 'filtroPorTitulo'
})
// npm run ng -- generate pipe pipes/filtroPorTitulo
export class FiltroPorTituloPipe implements PipeTransform {

  transform(listaFotos: FotoAPI[] = [], titulo: string): any {
    return listaFotos.filter(
      foto => foto.titulo.toLowerCase().match(titulo.toLowerCase())
    );
  }

}
