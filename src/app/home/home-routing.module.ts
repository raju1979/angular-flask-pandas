import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllDataComponent } from './all-data/all-data.component';
import { AllDataService } from './services/all-data.service';
import { AllColumnsComponent } from './all-columns/all-columns.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent, children: [
      {
        path: 'all', component: AllDataComponent, resolve: { alldata: AllDataService }
      },
      {
        path: 'columns', component: AllColumnsComponent
      },
      {
        path:'', redirectTo: 'all', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }