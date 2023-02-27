import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterleccionalPageRoutingModule } from './interleccional-routing.module';

import { InterleccionalPage } from './interleccional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterleccionalPageRoutingModule
  ],
  declarations: [InterleccionalPage]
})
export class InterleccionalPageModule {}
