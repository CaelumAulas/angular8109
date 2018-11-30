import {Component, Input} from '@angular/core';

export interface Img {
  alt: string;
  src: string;
}

@Component({
  selector: 'btsp-img-fluid',
  templateUrl: './img-fluid.component.html'
})
export class ImgFluidComponent {
  @Input() img: Img;
}
