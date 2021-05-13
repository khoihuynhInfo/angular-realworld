import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }

