'use strict';

import { Component, OnInit } from '@angular/core';
import { ServiceDirectoryApiService } from './service-directory-api.service';

@Component({
  selector: 'service-directory',
  templateUrl: './service-directory.component.html',
  styleUrls: ['./service-directory.component.scss']
})

export class ServiceDirectoryComponent implements OnInit {

  public services = [];

  constructor(private _service: ServiceDirectoryApiService) {}

  ngOnInit(): void {
    this.getServices();
  }

  public getServices() {
    this._service.getServices()
      .subscribe(res => {
        this.services.push(...res.data);
      });
  }
}
