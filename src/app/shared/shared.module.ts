import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  
  declarations: [],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterialModule
  ]
})
export class SharedModule { }
