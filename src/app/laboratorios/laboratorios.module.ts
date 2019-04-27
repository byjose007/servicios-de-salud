import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LaboratoriosPage } from './laboratorios.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoriosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LaboratoriosPage]
})
export class LaboratoriosPageModule {}
