'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ServicesListApiService } from './services-list.api.service';

import { ServiceDirectoryComponent } from './service-directoty.component';

@NgModule({
  declarations: [
    ServiceDirectoryComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ ServicesListApiService ],
})
export class ServiceDirectoryModule {}
