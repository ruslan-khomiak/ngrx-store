import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CarsStoreModule } from './cars-store';

@NgModule({
  imports: [
    CommonModule,
    CarsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: []
})
export class RootStoreModule {}
