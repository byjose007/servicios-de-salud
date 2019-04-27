import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CentrosSaludPage } from './centros-salud.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosSaludPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CentrosSaludPage]
})
export class CentrosSaludPageModule {}
