import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FamaciasPage } from './famacias.page';
import { HereMapComponent } from '../here-map/here-map.component';

const routes: Routes = [
  {
    path: '',
    component: FamaciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FamaciasPage, HereMapComponent]
})
export class FamaciasPageModule {}
