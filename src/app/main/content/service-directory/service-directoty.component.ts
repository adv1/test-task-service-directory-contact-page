'use strict';

import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../../shared/directory.service';

@Component({
  selector: 'service-directory',
  template: `
  <div class="container">
    <div class="d-flex" id="service-title">
      <h2>Service Directory</h2>
      <div class="service-title-button">
        <button><p>Add new service</p></button>
      </div>
    </div>
    <div class="service-content">
      <div id="list" *ngFor="let val of services">
        <div id="list-item">
          <div id="img">
            <img src="{{ val.icon }}" />
          </div>
          <div id="title"> {{ val.title }}</div>
        </div>
      </div>
    </div>
    </div>
    `,
  styleUrls: ['./service-directory.component.scss']
})

export class ServiceDirectoryComponent implements OnInit {

  public services = [];

  constructor(private _service: DirectoryService) {}

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
