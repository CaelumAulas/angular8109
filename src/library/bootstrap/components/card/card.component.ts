import {Component, Input} from '@angular/core';

@Component({
  selector: 'btsp-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() titulo: string;

  @Input() darkMode: boolean;

}
