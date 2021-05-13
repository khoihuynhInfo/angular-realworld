import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';

import { ShareModule } from 'src/app/shared/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './home.component';
import { PerfomanceTrackComponent } from './components/perfomance-track/perfomance-track.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    ArticlesComponent,
    ArticleItemComponent,
    PerfomanceTrackComponent,
    TagListComponent,
  ],
  exports: [
    HomeComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class HomeModule { }

