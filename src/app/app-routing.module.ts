import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericaComponent } from './america/america.component';

const routes: Routes = [{
  path: 'america',
  component: AmericaComponent,
  loadChildren: () => import('./america/america.module').then(m => m.AmericaModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
