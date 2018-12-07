import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FotoAPI } from 'src/app/model/api/FotoAPI';
import { Img } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';


@Component({
  selector: 'app-card-foto',
  templateUrl: './card-foto.component.html',
  styleUrls: ['./card-foto.component.scss']
})
export class CardFotoComponent implements OnInit {

  @Input() foto: FotoAPI;

  @Input() editable = false;

  @Input() darkMode = false;

  @Output() delete = new EventEmitter();

  toImg(foto: FotoAPI) {
    return {
      alt: foto.titulo,
      src: foto.url
    } as Img;
  }

  constructor() { }

  ngOnInit() {
  }

  deleteConfirm() {
    if (confirm('Apagar')) {
      this.delete.emit();
    }
  }

}
