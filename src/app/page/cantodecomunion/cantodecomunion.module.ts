import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantodecomunionPageRoutingModule } from './cantodecomunion-routing.module';

import { CantodecomunionPage } from './cantodecomunion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantodecomunionPageRoutingModule
  ],
  declarations: [CantodecomunionPage]
})
export class CantodecomunionPageModule {}
