'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DirectoryService } from '../../../shared/directory.service';

import { ServiceDirectoryComponent } from './service-directoty.component';

@NgModule({
  declarations: [
    ServiceDirectoryComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ DirectoryService ],
})
export class ServiceDirectoryModule {}
