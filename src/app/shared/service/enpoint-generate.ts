import { HttpHeaders } from '@angular/common/http';

export class GenerateEndPointInfomation {

  constructor(
    envUrl = '',
    endPoint = '',
  ) {
    this.envUrl = envUrl;
    this.endPoint = endPoint;
  }
  private envUrl = '';
  private endPoint = '';

  static generateHttpOption(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type':  'application/json',
    });
  }

  productFullUrl(): string {
    const result = `${this.envUrl}${this.endPoint}`;
    return result;
  }
}
