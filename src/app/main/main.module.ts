'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ServiceDirectoryModule } from './content/service-directory/service-directory.module';

import { MdIconModule, MdInputModule, MdMenuModule } from '@angular/material';

import { DirectoryService } from '../shared/directory.service';
import { mainRoutes } from './main.routes';

import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header-nav/header.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    ServiceDirectoryModule,
    MdInputModule,
    MdIconModule,
    MdMenuModule,
    RouterModule.forRoot(mainRoutes),
  ],
  providers: [ DirectoryService ],
})
export class MainModule {}
