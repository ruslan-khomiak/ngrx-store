import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { Car } from '../../models';
import { RootStoreState, CarsStoreActions } from '../../root-store';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {

  carName: string = '';
  carModel: string = '';

  get shouldBeDisabled(): boolean {
    return this.carName === '' || this.carModel === '';
  }

  constructor(
    private store: Store<RootStoreState.State>,
  ) {}

  onAdd(): void {
    const car: Car = this.getCar();
    this.store.dispatch(new CarsStoreActions.AddCar(car));
    this.resetCarForm();
  }

  resetCarForm(): void {
    this.carName = '';
    this.carModel = '';
  }

  private getCar(): Car {
    const date: string = moment().format('DD.MM.YYYY');
    return {
      date,
      name: this.carName,
      model: this.carModel,
      isSold: false,
    };
  }
}
