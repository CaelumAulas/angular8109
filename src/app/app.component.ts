import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FotoAPI } from './model/api/FotoAPI';

import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Caelumpic';
  fotos: Array<FotoAPI>;

  constructor(private _httpClient: HttpClient) {
    this._httpClient
      .get('http://localhost:3000/v1/fotos')
      .subscribe(resposta => this.fotos = resposta as Array<FotoAPI>);
  }

  toImg(foto: FotoAPI) {
    return {
      alt: foto.titulo,
      src: foto.url
    } as Img;
  }

  delete(foto: FotoAPI) {
    this._httpClient
      .delete('http://localhost:3000/v1/fotos/' + foto._id)
      .subscribe(() => {
        const posicaoElemento = this.fotos.indexOf(foto);
        this.fotos.splice(posicaoElemento, 1);
      });
  }
}
