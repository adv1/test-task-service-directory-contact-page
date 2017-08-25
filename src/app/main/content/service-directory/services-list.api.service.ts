'use strict';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicesListApiService {
  private _requestUrlServices = 'http://504080.com/api/v1/services/categories';

  constructor (
    private _http: Http
  ) {}

  public getServicesList() {
    let myHeaders = new Headers();
    myHeaders.set('Authorization', '8ce1e879cf5cdfa5a22251f4c6f435b0f71a5bbc');
    let options = new RequestOptions({ headers: myHeaders });
    return this._http.get(this._requestUrlServices, options)
      .map((res: Response) => res.json())
      .toPromise();
  }
}
