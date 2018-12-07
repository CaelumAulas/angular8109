import { Component, OnInit } from '@angular/core';

import { FotoAPI } from 'src/app/model/api/FotoAPI';

import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';
import { FotosResourceService } from 'src/app/services/fotos-resource.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  fotos: FotoAPI[] = [];
  termoBusca = '';

  constructor(private _fotosAPI: FotosResourceService) {
    this._fotosAPI.carregar()
      .subscribe((fotos: FotoAPI[]) => this.fotos = fotos);
  }

  delete(fotoRemovida: FotoAPI) {
    this._fotosAPI.apagar(fotoRemovida)
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

