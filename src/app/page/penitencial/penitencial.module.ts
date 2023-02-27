import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenitencialPageRoutingModule } from './penitencial-routing.module';

import { PenitencialPage } from './penitencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenitencialPageRoutingModule
  ],
  declarations: [PenitencialPage]
})
export class PenitencialPageModule {}
