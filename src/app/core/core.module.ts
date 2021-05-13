import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NgModule,
} from '@angular/core';

import {
  TokenInterceptor,
  CacheInterceptor,
} from './intercepters';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule { }

