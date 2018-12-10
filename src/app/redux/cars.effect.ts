import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AddCar, AddCarSuccess, CAR_ACTION, DeleteCar, DeleteCarSuccess, LoadCarsSuccess, UpdateCar, UpdateCarSuccess } from './cars.action';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';

@Injectable()
export class CarsEffect {

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
  ) {}

  @Effect() loadCars = this.actions$.ofType(CAR_ACTION.LOAD_CARS).pipe(
    switchMap(() => {
      return this.carsService
        .loadCars()
        .pipe(
          map((cars: Car[]) => new LoadCarsSuccess(cars)),
          catchError(() => of({})),
        );
    })
  );

  @Effect() addCar = this.actions$.ofType(CAR_ACTION.ADD_CAR).pipe(
    map((action: AddCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .addCar(car)
        .pipe(
          map((car: Car) => new AddCarSuccess(car)),
          catchError(() => of({})),
        );
    })
  );

  @Effect() updateCar = this.actions$.ofType(CAR_ACTION.UPDATE_CAR).pipe(
    map((action: UpdateCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .updateCar(car)
        .pipe(
          map((car: Car) => new UpdateCarSuccess(car)),
          catchError(() => of({})),
        );
    })
  );

  @Effect() deleteCar = this.actions$.ofType(CAR_ACTION.DELETE_CAR).pipe(
    map((action: DeleteCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .deleteCar(car)
        .pipe(
          map(() => new DeleteCarSuccess(car)),
          catchError(() => of({})),
        );
    })
  );

}
