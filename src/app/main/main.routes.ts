'use strict';

import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { serviceRoute } from './content/service-directory/service-directory.route';


export const mainRoutes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: '', component: MainComponent,
    children: [
      serviceRoute,
      {
        path: 'companies',
        loadChildren: 'app/main/content/companies/companies.module#CompaniesModule'
      },
      {
        path: 'feed',
        loadChildren: 'app/main/content/feed/feed.module#FeedModule'
      },
      {
        path: 'questions',
        loadChildren: 'app/main/content/questions/questions.module#QuestionsModule'
      },
    ]
  },
];
