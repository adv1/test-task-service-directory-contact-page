'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ServiceDirectoryApiService } from './service-directory-api.service';

import { ServiceDirectoryComponent } from './service-directoty.component';

@NgModule({
  declarations: [
    ServiceDirectoryComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ ServiceDirectoryApiService ],
})
export class ServiceDirectoryModule {}
