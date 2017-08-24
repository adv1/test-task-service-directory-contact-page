'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';


const questionsRoute: Routes = [
  { path: '', component: QuestionsComponent }
];

@NgModule({
  declarations: [
    QuestionsComponent,
  ],
  imports: [
    RouterModule.forChild(questionsRoute),
  ],
})
export class QuestionsModule {}
