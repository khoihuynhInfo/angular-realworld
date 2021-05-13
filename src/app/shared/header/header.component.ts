import { Component } from '@angular/core';
import { routingMaps } from 'src/app/routing-map';

interface IMenu {
  id: string | number;
  text: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  config = {
    txtBrand: 'MrKhoiHandSome',
    menus: [
      {
        id: '1',
        text: 'Home',
        routerLink: '',
      },
      {
        id: '1',
        text: 'Sign in',
        routerLink: routingMaps.AUTHEN.LOGIN.absolute,
      },
      {
        id: '1',
        text: 'Sign up',
        routerLink: routingMaps.AUTHEN.REGISTER.absolute,
      }
    ],
  };

  menuList: Array<IMenu> = [];

  constructor() {
    this.menuList = this.config.menus;
  }

  identify(
    _: string | number,
    item: IMenu,
  ): number | string {
    return item.id;
  }

}

