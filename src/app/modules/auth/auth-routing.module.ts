import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routingMaps } from 'src/app/routing-map';
import { AuthComponent } from './auth.component';
import { AuthModule } from './auth.module';
import {
  LoginComponent,
  RegisterComponent,
} from './index';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      authRoutes,
    ),
  ],
  exports: [RouterModule]
})
export class AuthenRoutingModule { }
