import { carsReducer } from './redux/cars.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';

import { CarsService } from './cars.service';

import { CarsEffect } from './redux/cars.effect';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer}),
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
