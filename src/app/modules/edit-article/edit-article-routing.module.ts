import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { EditArticleComponent } from './edit-article.component';

const routesEditArticle: Routes = [
  {
    path: '',
    component: EditArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesEditArticle)],
  exports: [RouterModule]
})
export class EditArticleRoutingModule { }
