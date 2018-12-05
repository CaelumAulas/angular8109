import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { FotoAPI } from 'src/app/model/api/FotoAPI';

import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  fotos: Array<FotoAPI> = [];
  termoBusca = '';

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

  delete(fotoRemovida: FotoAPI) {
    this._httpClient
      .delete('http://localhost:3000/v1/fotos/' + fotoRemovida._id)
      .subscribe(() => {
        this.fotos = this.fotos.filter(foto => foto._id !== fotoRemovida._id);
      });
  }

  trackFotos(index: number, item: FotoAPI) {
    return item._id;
  }

  ngOnInit() {
  }

}
