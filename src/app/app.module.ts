import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BootstrapCSSModule } from 'src/library/bootstrap/bootstrap.module';

import { AppComponent } from './app.component';

import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TresPontinhosPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapCSSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
