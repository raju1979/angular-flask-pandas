import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeComponent } from './home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { AllDataComponent } from './all-data/all-data.component';
import { DataService } from './services/data.service';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { AgGridModule } from 'ag-grid-angular';
import { AllDataService } from './services/all-data.service';
import { AllColumnsComponent } from './all-columns/all-columns.component';

@NgModule({
  declarations: [HomeNavComponent, HomeComponent, AllDataComponent, AllColumnsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    AgGridModule.withComponents([])
  ],
  providers: [DataService, AllDataService]
})
export class HomeModule { }
