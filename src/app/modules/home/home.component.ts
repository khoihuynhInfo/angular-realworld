import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('vcArticle', {
    static: true,
    read: ViewContainerRef,
  })
  vcArticle!: ViewContainerRef;

  @ViewChild('vcTag', {
    static: true,
    read: ViewContainerRef,
  })
  vcTag!: ViewContainerRef;

  constructor(
    private homeServices: HomeService,
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.getTags();
  }

  async getArticles() {
    try {
      const { ArticlesComponent } =
        await import('./components/articles/articles.component');

      await this.homeServices.getArticles(
        this.vcArticle,
        ArticlesComponent,
      );
    } catch (error) {
      alert(error);
    }
  }

  async getTags() {
    try {
      const { TagListComponent } =
        await import('./components/tag-list/tag-list.component');

      await this.homeServices.getTags(
        this.vcTag,
        TagListComponent,
      );
    } catch (error) {
      alert(error);
    }
  }

}
