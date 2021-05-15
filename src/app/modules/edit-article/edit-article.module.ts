import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';

import { ShareModule } from 'src/app/shared/share.module';
import { EditArticleRoutingModule } from './edit-article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // ShareModule,
    EditArticleRoutingModule,
  ],
  declarations: [
  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class EditArticleModule { }

