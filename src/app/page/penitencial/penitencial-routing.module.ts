import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenitencialPage } from './penitencial.page';

const routes: Routes = [
  {
    path: '',
    component: PenitencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenitencialPageRoutingModule {}
