import { ImgFluidComponent } from 'src/library/bootstrap/components/img-fluid/img-fluid.component';
import { CardComponent } from 'src/library/bootstrap/components/card/card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ImgFluidComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ImgFluidComponent,
    CardComponent
  ]
})
export class BootstrapCSSModule {}
