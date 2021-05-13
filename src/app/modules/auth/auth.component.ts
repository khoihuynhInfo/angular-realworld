import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { routingMaps } from 'src/app/routing-map';

@Component({
  selector: 'app-auth',
  template: `
    <app-login *ngIf="isLogin"></app-login>
    <app-register *ngIf="!isLogin"></app-register>
  `
})
export class AuthComponent implements OnInit {

  isLogin = false;

  constructor(
    private router: Router,
  ) {
    if (this.router.url
      === `/${routingMaps.AUTHEN.LOGIN.absolute}`) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit(): void {
    // remove component
  }

}
