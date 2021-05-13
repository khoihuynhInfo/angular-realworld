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
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent implements OnInit {

  tags: Array<string> = [];

  @Input() set articleListData(value: any) {
    const { tags } = value;
    this.tags = tags;
  }

  constructor(
  ) {}

  ngOnInit(): void {}

  keyIdentify(index: any, _: string): number {
    return index;
  }

  isHasTag(): boolean {
    return (this.tags.length > 0);
  }
}
