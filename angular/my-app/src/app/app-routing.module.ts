import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//AQUÍ ES DONDE TENGO QUE ESTABLECER
//LA CORRESPONDECIA ENTRE RUTAS Y COMPONENTE

const routes: Routes = [
  {path:"dni", component: DniComponent},
  //{path:"", component: DniComponent},
  {path:"", component: ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
