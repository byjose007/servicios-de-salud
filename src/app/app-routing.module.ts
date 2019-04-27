// import { MapComponent } from './map/map.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "famacias",
    loadChildren: "./famacias/famacias.module#FamaciasPageModule"
  },

  // { path: 'map', component: MapComponent},
  { path: 'clinicas', loadChildren: './clinicas/clinicas.module#ClinicasPageModule' },
  { path: 'laboratorios', loadChildren: './laboratorios/laboratorios.module#LaboratoriosPageModule' },
  { path: 'centros-salud', loadChildren: './centros-salud/centros-salud.module#CentrosSaludPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
