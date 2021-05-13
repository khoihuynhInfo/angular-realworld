import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';

import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import {
  catchError, mergeMap,
} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { EEndPoints } from '../../config/endpoints.config';
import { GenerateEndPointInfomation } from './enpoint-generate';

const ERROR_MESS_LIST = {
  err_message_client:
    'Something bad happened; please try again later.',
  err_message_friendly: 'Some Thing When Wrong !!!'
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    observe: 'response',
  })
};

@Injectable()
export class APIHandlerService
  extends GenerateEndPointInfomation {
  isENVProduct = false;
  environmentUrl = '';
  environmentName = '';

  constructor(
    private http: HttpClient,
  ) {
    super();
    this.isENVProduct = false;
    this.environmentUrl = environment.apiUrl;
    this.environmentName = environment.envName;
   }

  /** GET: */
  getMethod<T>(
    enpoint: EEndPoints,
    header?: HttpHeaders,
    isPreventShowToast = false,
  ): Promise<HttpResponse<T>> | Observable<T>{
    const enerateEndPoint = new GenerateEndPointInfomation(
      this.environmentUrl,
      enpoint
    );
    const fullUrl = enerateEndPoint.productFullUrl();

    const requestResult = this.http.get<T>(
      fullUrl,
      {
        observe: 'response',
      }
    ).pipe(
      mergeMap((value) => {
        return this._checkBodyResponeAPIEmpty(value);
      }),
      catchError((error) => {
        return this._handleError(error, isPreventShowToast);
      }),
    );

    return requestResult.toPromise()
      .then()
      .catch((error) => {
        throw new Error(error);
      });
  }

  /** POST */
  postMethod<T1, T2>(
    data: any,
    enpoint: EEndPoints,
    isPreventShowToast = false,
  ): Promise<HttpResponse<T1>> {
    const enerateEndPoint = new GenerateEndPointInfomation(
      this.environmentUrl,
      enpoint,
    );
    const fullUrl = enerateEndPoint.productFullUrl();

    const requestResult =
      this.http.post<T1>(
        fullUrl,
        data,
        {
          observe: 'response',
        }
      )
      .pipe(
        mergeMap((value) => {
          return this._checkBodyResponeAPIEmpty(value);
        }),
        catchError((error) => {
          return this._handleError(
            error,
            isPreventShowToast,
          );
        })
      );


    return requestResult.toPromise()
      .then()
      .catch((error) => {
        throw new Error(error);
      });
  }

  /** Error layer */
  // tslint:disable-next-line:no-shadowed-variable
  private _handleError(
    error: HttpErrorResponse,
    isPreventShowToast: boolean,
  ) {
    if (error.error instanceof ErrorEvent) {
      if (!this.isENVProduct) {
        console.error('An error occurred:', error.error.message);
      }
    } else {
      if (!this.isENVProduct && isPreventShowToast) {
        const { status } = error;

        // this._handleErrorStatus(status);
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`
        );
      }
    }
    return throwError(ERROR_MESS_LIST.err_message_client);
  }

  private _checkBodyResponeAPIEmpty(value: any): Observable<any> {
    if (value && value instanceof HttpResponse) {
      if (!value.body) {
        return throwError('Body Empty');
      }
    }
    return of(value);
  }

  private _handleErrorStatus(statusCode: number): void {
    switch (statusCode) {
      case 400:
        console.error(ERROR_MESS_LIST.err_message_friendly);
        break;
      case 401:
        console.error(ERROR_MESS_LIST.err_message_friendly);
        break;
      case 404:
        console.error(ERROR_MESS_LIST.err_message_friendly);
        break;
      case 500:
        console.error(ERROR_MESS_LIST.err_message_friendly);
        break;
      default:
        break;
    }
  }
}
