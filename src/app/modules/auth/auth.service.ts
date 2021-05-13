import { HttpResponse } from '@angular/common/http';
import { InstantiateExpr } from '@angular/compiler';
import {
  Injectable,
} from '@angular/core';

import { EEndPoints } from 'src/app/config/endpoints.config';
import { LocalStorageService } from 'src/app/core/services/local-store.service';
import { IUserData } from 'src/app/shared/models/user.model';
import {
  APIHandlerService,
} from 'src/app/shared/service/api-handler.service';

export interface User {
  email: string;
  password: string;
}

export enum EStatusApi {
  Pending,
  Success,
  Error,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isProduct = false;

  constructor(
    private apiHandlerService: APIHandlerService,
    private localStorageService: LocalStorageService,
  ) {}

  async signIn(
    _user: User,
    isShowToast?: true,
  ): Promise<any> {
    try {
      const data = {
        user: {
          email: 'khoihuynh@gmail.com',
          password: 'khoihuynh@gmail.com',
        }
      };

      const result = await this.apiHandlerService
        .postMethod<IUserData, User>(
          data,
          EEndPoints.login,
        );

      const userResponse = result.body?.user;

      this._saveTokenToLocalStore(userResponse);

      return result;
    } catch (error) {
      console.log('THIS IS [ERROR]');
    } finally {
      console.log('THIS IS [FINAL]');
    }
  }

  private _saveTokenToLocalStore(
    userResponse: IUserData | any,
  ) {
    if (userResponse as IUserData) {
      const localUserResponse = { ...userResponse };
      this.localStorageService.setInfo(
        localUserResponse,
      );
    }
  }

}
