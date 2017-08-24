'use strict';

import { Component, OnInit } from '@angular/core';
import { ServicesListApiService } from './services-list.api.service';

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
      .subscribe(res => {
        this.services.push(...res.data);
      });
  }
}
