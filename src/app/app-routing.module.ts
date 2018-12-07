import { RouterModule } from '@angular/router';
import { ListagemComponent } from 'src/app/components/pages/listagem/listagem.component';
import { FormComponent } from 'src/app/components/pages/form/form.component';

export const routes = RouterModule.forRoot([
  {
    path: '',
    component: ListagemComponent
  },
  {
    path: 'cadastrar',
    component: FormComponent
  },
  {
    path: 'editar/:idFoto',
    component: FormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]);
