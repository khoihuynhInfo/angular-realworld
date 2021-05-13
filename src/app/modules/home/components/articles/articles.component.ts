import { HttpResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';

import {
  IArticles,
} from 'src/app/shared/models/articles.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {

  articles: Array<IArticles> = [];

  @Input() set articleListData(value: any) {
    const { articles } = value;
    this.articles = articles;
  }

  constructor(
  ) {}

  ngOnInit(): void {}

  keyIdentify(index: any, _: IArticles): number {
    return index;
  }

  isHasArticle(): boolean {
    return (this.articles.length > 0);
  }
}
