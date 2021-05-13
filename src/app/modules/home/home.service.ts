import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';

import { EEndPoints } from 'src/app/config/endpoints.config';
import {
  UIAsyncService
} from 'src/app/core/services/ui-async.service';
import { asyncUIWithStatus } from 'src/app/shared/decorator/async-ui.decorator';
import { IArticles } from 'src/app/shared/models/articles.model';
import {
  APIHandlerService,
} from 'src/app/shared/service/api-handler.service';

export enum EStatusApi {
  Pending,
  Success,
  Error,
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  isProduct = false;

  constructor(
    private apiHandlerService: APIHandlerService,
    private uiAsyncService: UIAsyncService,
  ) {}

  getArticlesCaching() {
    return this.apiHandlerService
    .getMethod<Array<IArticles>>(EEndPoints.articles);
  }

  /***
   * REFELECT UI => Type Call API
   * @params vcrTemplate
   * @returns void
  */
  @asyncUIWithStatus()
  async getArticles(
    vcr: ViewContainerRef,
    componentFilledData: any,
  ) {
    return await this.apiHandlerService
      .getMethod<Array<IArticles>>(EEndPoints.articles);
  }

  /***
   * REFELECT UI => Type Call API
   * @params vcrTemplate
   * @returns void
  */
  @asyncUIWithStatus()
  async getTags(
    vcr: ViewContainerRef,
    componentFilledData: any,
  ) {
    return await this.apiHandlerService
      .getMethod<Array<string>>(EEndPoints.tags);
  }
}
