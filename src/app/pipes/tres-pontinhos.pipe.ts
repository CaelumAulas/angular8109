import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tresPontinhos'
})
export class TresPontinhosPipe implements PipeTransform {

  // npm run ng -- generate pipe pipes/tresPontinhos
  transform(texto: string, tamanhoMaximo: number): any {
    return texto.length <= tamanhoMaximo
      ? texto
      : texto.substring(0, tamanhoMaximo) + '...';
  }

}
