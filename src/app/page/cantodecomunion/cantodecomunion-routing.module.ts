import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantodecomunionPage } from './cantodecomunion.page';

const routes: Routes = [
  {
    path: '',
    component: CantodecomunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantodecomunionPageRoutingModule {}
