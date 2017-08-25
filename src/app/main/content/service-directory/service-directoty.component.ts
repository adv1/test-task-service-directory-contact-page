'use strict';

import { Component, OnInit } from '@angular/core';
import { ServicesListApiService } from './services-list.api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'service-directory',
  templateUrl: './service-directory.component.html',
  styleUrls: ['./service-directory.component.scss']
})

export class ServiceDirectoryComponent implements OnInit {

  public services = [];

  constructor(private _service: ServicesListApiService) {}

  public ngOnInit(): void {
    this._getServicesList();
  }

  private _getServicesList() {
    this._service.getServicesList()
      .then(res => this.services = res.data)
      .catch(this._serverError);
  }

  private _serverError(err: any) {
    console.log('sever error:', err);
    if (err instanceof Response) {
      return Observable.throw(err.json() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
