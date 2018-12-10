import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootStoreModule } from './root-store';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CarFormComponent } from './components/car-form/car-form.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './containers/cars/cars.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
