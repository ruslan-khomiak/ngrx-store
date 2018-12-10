import { Action } from '@ngrx/store';

import { Car } from './../car.model';

export enum CAR_ACTION {
  ADD_CAR = '[Cars] ADD_CAR',
  ADD_CAR_SUCCESS = '[Cars] ADD_CAR_SUCCESS',
  DELETE_CAR = '[Cars] DELETE_CAR',
  DELETE_CAR_SUCCESS = '[Cars] DELETE_CAR_SUCCESS',
  UPDATE_CAR = '[Cars] UPDATE_CAR',
  UPDATE_CAR_SUCCESS = '[Cars] UPDATE_CAR_SUCCESS',
  LOAD_CARS = '[Cars] LOAD_CARS',
  LOAD_CARS_SUCCESS = '[Cars] LOAD_CARS_SUCCESS',
}

export class AddCar implements Action {
  readonly type = CAR_ACTION.ADD_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class AddCarSuccess implements Action {
  readonly type = CAR_ACTION.ADD_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class DeleteCar implements Action {
  readonly type = CAR_ACTION.DELETE_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class DeleteCarSuccess implements Action {
  readonly type = CAR_ACTION.DELETE_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class UpdateCar implements Action {
  readonly type = CAR_ACTION.UPDATE_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class UpdateCarSuccess implements Action {
  readonly type = CAR_ACTION.UPDATE_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class LoadCars implements Action {
  readonly type = CAR_ACTION.LOAD_CARS;
}

export class LoadCarsSuccess implements Action {
  readonly type = CAR_ACTION.LOAD_CARS_SUCCESS;

  constructor(
    public payload: Car[],
  ) {}
}

export type CarsAction =
  | AddCar
  | AddCarSuccess
  | UpdateCar
  | UpdateCarSuccess
  | DeleteCar
  | DeleteCarSuccess
  | LoadCars
  | LoadCarsSuccess;
