import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Car } from '../../models';
import { RootStoreState, CarsStoreActions } from '../../root-store';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;

  constructor(
    private store: Store<RootStoreState.State>,
  ) { }

  onDelete(): void {
    this.store.dispatch(new CarsStoreActions.DeleteCar(this.car));
  }

  onBuy(): void {
    this.store.dispatch(new CarsStoreActions.UpdateCar( { ...this.car, isSold: true }));
  }
}
