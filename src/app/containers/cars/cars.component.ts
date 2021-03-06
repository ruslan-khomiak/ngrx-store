import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Cars } from '../../models';
import { CarsStoreActions, RootStoreState } from '../../root-store';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
})

export class CarsComponent implements OnInit {

  cars$: Observable<Cars> = this.store.select('cars');

  constructor(
    private store: Store<RootStoreState.State>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new CarsStoreActions.GetCars());
  }
}
