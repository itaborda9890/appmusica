import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantoPageRoutingModule } from './santo-routing.module';

import { SantoPage } from './santo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantoPageRoutingModule
  ],
  declarations: [SantoPage]
})
export class SantoPageModule {}
