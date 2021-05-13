import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {
  share,
  tap,
} from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>>
    = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    if (req.headers.get('reset')) {
      this.cache.delete(req.url);
    }

    const cachedResponse: any = this.cache.get(req.url);

    if (cachedResponse) {
      return of(cachedResponse.clone());
    } else {
      return next.handle(req).pipe(
        tap((stateEvent) => {
          if (stateEvent instanceof HttpResponse) {
            this.cache.set(req.url, stateEvent.clone());
          }
        }),
        share(),
      );
    }
  }
}
