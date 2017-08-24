'use strict';

import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { signUpRoute } from './sing-up/sign-up.route';


export const authRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: '', component: AuthComponent,
    children: [
      signUpRoute
    ]
  }
];
