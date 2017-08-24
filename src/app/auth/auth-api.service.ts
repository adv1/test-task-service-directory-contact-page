'use strict';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthApiService {
  private _requestUrlEnquiryTypes = 'http://504080.com/api/v1/directories/enquiry-types';

  constructor (
    private _http: Http
  ) {}

  public getEnquiryTypes() {
    return this._http.get(this._requestUrlEnquiryTypes)
      .map((res: Response) => res.json());
  }
}
