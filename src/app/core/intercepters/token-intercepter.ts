import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-store.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
  ) {}
  // intercept(request: HttpRequest<any>, next: HttpHandler) {
  //   const authToken = 'dasdasdasdasdafqwet3hgehwe';

  //   request = request.clone({
  //     setHeaders: {
  //       Authorization: `Token ${authToken}`
  //     }
  //   });

  //   return next.handle(request);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler):
     Observable<HttpEvent<any>>{
    return next.handle(req);

    this.localStorageService.loadInfo((value) => {
      console.log(value);
    });
  }

}
