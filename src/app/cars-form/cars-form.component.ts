import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { AddCar, LoadCars } from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName: string = '';
  carModel: string = '';

  get shouldBeDisabled(): boolean {
    return this.carName === '' || this.carModel === '';
  }

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.loadCars();
  }

  onAdd(): void {
    const car: Car = this.getCar();
    this.store.dispatch(new AddCar(car));
    this.resetCarForm();
  }

  loadCars(): void {
    this.store.dispatch(new LoadCars());
  }

  resetCarForm(): void {
    this.carName = '';
    this.carModel = '';
  }

  private getCar(): Car {
    const date: string = moment().format('DD.MM.YYYY');
    return new Car(this.carName, date, this.carModel);
  }
}
