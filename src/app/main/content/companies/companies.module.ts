'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';


const companiesRoute: Routes = [
  { path: '', component: CompaniesComponent }
];

@NgModule({
  declarations: [
    CompaniesComponent,
  ],
  imports: [
    RouterModule.forChild(companiesRoute),
  ],
})
export class CompaniesModule {}
