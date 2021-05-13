import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingMaps } from 'src/app/routing-map';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: routingMaps.NOT_FOUD.path,
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
