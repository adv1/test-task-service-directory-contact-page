'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed.component';


const feedRoute: Routes = [
  { path: '', component: FeedComponent }
];

@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    RouterModule.forChild(feedRoute),
  ],
})
export class FeedModule {}
