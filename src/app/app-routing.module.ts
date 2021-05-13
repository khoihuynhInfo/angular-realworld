import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guad';
import { routingMaps } from './routing-map';

const routes: Routes = [
  {
    path: routingMaps.HOME.path,
    loadChildren: () => import('./modules/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: routingMaps.AUTHEN.LOGIN.absolute,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: routingMaps.AUTHEN.REGISTER.absolute,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: routingMaps.HOME.path,
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
