import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { Car } from '../../models';
import { CarsService } from '../../services/cars.service';
import * as carsActions from './actions';

@Injectable()
export class CarsStoreEffects {

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
  ) {}

  @Effect() getCars = this.actions$.pipe(
    ofType(carsActions.ActionTypes.GET_CARS),
    switchMap(() => {
      return this.carsService
        .getCars()
        .pipe(
          map((cars: Car[]) => new carsActions.GetCarsSuccess(cars)),
          catchError((error: HttpErrorResponse) => of(new carsActions.GetCarsFailure(error))),
        );
    })
  );

  @Effect() addCar = this.actions$.pipe(
    ofType(carsActions.ActionTypes.ADD_CAR),
    map((action: carsActions.AddCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .addCar(car)
        .pipe(
          map((car: Car) => new carsActions.AddCarSuccess(car)),
          catchError((error: HttpErrorResponse) => of(new carsActions.AddCarFailure(error))),
        );
    })
  );

  @Effect() updateCar = this.actions$.pipe(
    ofType(carsActions.ActionTypes.UPDATE_CAR),
    map((action: carsActions.UpdateCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .updateCar(car)
        .pipe(
          map((car: Car) => new carsActions.UpdateCarSuccess(car)),
          catchError((error: HttpErrorResponse) => of(new carsActions.UpdateCarFailure(error))),
        );
    })
  );

  @Effect() deleteCar = this.actions$.pipe(
    ofType(carsActions.ActionTypes.DELETE_CAR),
    map((action: carsActions.DeleteCar) => action.payload),
    switchMap((car: Car) => {
      return this.carsService
        .deleteCar(car)
        .pipe(
          map(() => new carsActions.DeleteCarSuccess(car)),
          catchError((error: HttpErrorResponse) => of(new carsActions.DeleteCarFailure(error))),
        );
    })
  );

}
