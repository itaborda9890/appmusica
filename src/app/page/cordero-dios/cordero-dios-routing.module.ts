import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorderoDiosPage } from './cordero-dios.page';

const routes: Routes = [
  {
    path: '',
    component: CorderoDiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorderoDiosPageRoutingModule {}
