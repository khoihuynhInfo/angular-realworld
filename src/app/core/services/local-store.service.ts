
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IUserMajor } from 'src/app/shared/models/user.model';
import { LocalStorageRefService } from './local-store-ref.service';

interface MyData {
  user: IUserMajor;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  private myDataState: any;
  // tslint:disable-next-line:variable-name
  private _localStorage!: Storage;
  // tslint:disable-next-line:variable-name
  private _myData$ = new BehaviorSubject<MyData | null>(null);

  myData$ = this._myData$.asObservable();

  constructor(
    private localStorageRefService: LocalStorageRefService,
  ) {
    this._localStorage = localStorageRefService.localStorage;
    this._initMyData();
  }

  setInfo(data: MyData) {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem('myData', jsonData);
    this._myData$.next(data);
  }

  async loadInfo(callback = (value: any) => {}) {
    const data = await this._localStorage.getItem('myData');
    const jsonData = data ? JSON.parse(data) : null ;
    await this._myData$.next(jsonData);

    return callback(this._myData$);
  }

  clearInfo() {
    this._localStorage.removeItem('myData');
    this._myData$.next(null);
  }

  clearAllLocalStorage() {
    this._localStorage.clear();
    this._myData$.next(null);
  }

  private _initMyData() {
    this.myDataState = {
      user: {
        email: '',
        token: '',
        username: '',
      }
    } as MyData;
  }

}


