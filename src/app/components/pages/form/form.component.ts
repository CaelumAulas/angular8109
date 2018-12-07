import { Component, OnInit } from '@angular/core';

import { FotoAPI } from 'src/app/model/api/FotoAPI';

import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';
import { ActivatedRoute } from '@angular/router';

import { filter, flatMap } from 'rxjs/operators';
import { FotosResourceService } from 'src/app/services/fotos-resource.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
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

  formulario = new FormGroup({
    inputTitulo: new FormControl(this.foto.titulo, [Validators.required, Validators.minLength(3)])
  });


  constructor(private _fotoAPI: FotosResourceService, private _rotaAtual: ActivatedRoute, fb: FormBuilder) {

    // this.formulario = fb.group({
    //   inputTitulo: [this.foto.titulo, Validators.required, Validators.minLength(3)],
    //   inputUrl: [this.foto.url]
    // });

    // Andre Staltz => egghead.io
    this._rotaAtual.params
      .pipe(filter(params => params.idFoto))
      .pipe(flatMap(params => this._fotoAPI.carregar(params.idFoto)))
      .subscribe((foto: FotoAPI) => {
        this.foto = foto;

        this.formulario.patchValue({
          inputTitulo: this.foto.titulo
        });

      });

      this.formulario.valueChanges
        .subscribe(alteracoes => this.foto.titulo = alteracoes.inputTitulo);

  }

  ngOnInit() {
  }

  save() {
    this._fotoAPI.save(this.foto);
  }

}
