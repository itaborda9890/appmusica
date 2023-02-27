import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorderoDiosPageRoutingModule } from './cordero-dios-routing.module';

import { CorderoDiosPage } from './cordero-dios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorderoDiosPageRoutingModule
  ],
  declarations: [CorderoDiosPage]
})
export class CorderoDiosPageModule {}
