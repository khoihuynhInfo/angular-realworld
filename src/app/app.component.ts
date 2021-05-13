import { Component, NgZone, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly title = 'realworld';

  isENVProduction = false;
  isShowBanner = false;
  pageActiveBanner = [
    '/',
    '/home',
  ];

  environmentName = '';
  environmentUrl = '';

  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {
    this._initEnvValue();
    this._routingHandler(router);
  }

  ngOnInit() {
    this._removeLogProduction();
  }

  private _initEnvValue(): void {
    this.environmentUrl = environment.apiUrl;
    this.environmentName = environment.envName;
    this.isENVProduction = environment.production;
  }

  private _routingHandler(router: Router): void {
    router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
    )
    .subscribe(
      (val) => {
        if (val instanceof NavigationEnd) {
          const result = this.pageActiveBanner
            .filter((word) => word === val.url);
          if (result.length > 0) {
            this.ngZone.run(() => {
              this.isShowBanner = true;
            });
          } else {
            this.ngZone.run(() => {
              this.isShowBanner = false;
            });
          }
        }
      },
      (err) => {
        if (this.isENVProduction) {
          console.error(err);
        }
      },
    );
  }

  private _removeLogProduction(): void {
    if (this.isENVProduction && window) {
      window.console.log = () => {};
    }
  }

}
