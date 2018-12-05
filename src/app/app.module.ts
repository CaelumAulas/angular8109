import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BootstrapCSSModule } from 'src/library/bootstrap/bootstrap.module';

import { AppComponent } from './app.component';

import { TresPontinhosPipe } from './pipes/tres-pontinhos.pipe';
import { FiltroPorTituloPipe } from './pipes/filtro-por-titulo.pipe';

import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { FormComponent } from './components/pages/form/form.component';
import { routes } from './app-routing.module';
// npm run ng -- generate component components/pages/form components/pages/listagem
@NgModule({
  declarations: [
    AppComponent,
    TresPontinhosPipe,
    FiltroPorTituloPipe,
    ListagemComponent,
    FormComponent
  ],
  imports: [
    routes,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BootstrapCSSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
