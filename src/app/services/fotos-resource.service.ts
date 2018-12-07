import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FotoAPI } from '../model/api/FotoAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosResourceService {

  constructor(private _httpClient: HttpClient) { }
  // npm run ng -- generate service services/fotosResource
  carregar(idFoto?: string) {
    return this._httpClient
      .get('http://localhost:3000/v1/fotos' + (idFoto ? '/' + idFoto : ''));
  }

  apagar(foto: FotoAPI) {
    return this._httpClient
          .delete('http://localhost:3000/v1/fotos/' + foto._id);
  }

  save(foto: FotoAPI): any {
    alert('Salvou ' + foto.titulo);
  }

}
