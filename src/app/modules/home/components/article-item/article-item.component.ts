import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { IArticles } from 'src/app/shared/models/articles.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent implements OnInit {
  config: any = {
    readMoreBtn: 'Read more...',
  };

  articleData!: IArticles;

  @Input() set article(value: IArticles) {
    this.articleData = value;
  }

  constructor() {}

  ngOnInit(): void {}
}

