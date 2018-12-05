import { Component, OnInit } from '@angular/core';

import { FotoAPI } from 'src/app/model/api/FotoAPI';

import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  foto: FotoAPI = {
    titulo: undefined,
    url: undefined,
    _id: undefined,
    descricao: undefined
  };

  constructor() { }

  ngOnInit() {
  }

  toImg(foto: FotoAPI) {
    return {
      alt: foto.titulo,
      src: foto.url
    } as Img;
  }

}
