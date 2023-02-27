import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantoPage } from './santo.page';

const routes: Routes = [
  {
    path: '',
    component: SantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantoPageRoutingModule {}
