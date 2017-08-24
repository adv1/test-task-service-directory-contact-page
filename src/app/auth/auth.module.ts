'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    RouterModule.forRoot(authRoutes),
  ],
})
export class AuthModule {}
