import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FotoAPI } from '../model/api/FotoAPI';


const API_URL = 'http://localhost:3000/v1/fotos/';
@Injectable({
  providedIn: 'root'
})
export class FotosResourceService {

  constructor(private _httpClient: HttpClient) { }
  // npm run ng -- generate service services/fotosResource
  carregar(idFoto?: string) {
    return this._httpClient
      .get(API_URL + (idFoto ? idFoto : ''));
  }

  apagar(foto: FotoAPI) {
    return this._httpClient
          .delete(API_URL + foto._id);
  }

  save(foto: FotoAPI): any {
    if (foto._id) {
      return this._httpClient.put(API_URL + foto._id, foto);
    } else {
      return this._httpClient.post(API_URL, foto);
    }
  }

}
