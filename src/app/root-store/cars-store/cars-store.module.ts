import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CarsStoreEffects } from './effects';
import { carsStoreReducer } from './reducer';
import { CarsService } from '../../services';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cars', carsStoreReducer),
    EffectsModule.forFeature([CarsStoreEffects]),
  ],
  providers: [
    CarsService,
    CarsStoreEffects,
  ]
})
export class CarsStoreModule {}
