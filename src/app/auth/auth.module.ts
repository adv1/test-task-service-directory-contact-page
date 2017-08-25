'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthApiService } from './auth-api.service';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sing-up/sign-up.component';
import { authRoutes } from './auth.routes';



@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(authRoutes),
  ],
  providers: [ AuthApiService ]
})
export class AuthModule {}
