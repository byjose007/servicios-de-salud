import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: 'famacias', loadChildren: './famacias/famacias.module#FamaciasPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
