import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderComponent,
  BannerComponent,
  FooterComponent,
  LoaderComponent,
  LostInternetComponent,
  TestCompleteComponent
} from './index';
import { APIHandlerService } from './service/api-handler.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    LoaderComponent,
    LostInternetComponent,
    // == Test ==
    TestCompleteComponent,
  ],
  providers: [
    APIHandlerService,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    LoaderComponent,
    LostInternetComponent,
    // == Test ==
    TestCompleteComponent,
  ],
})
export class ShareModule { }

