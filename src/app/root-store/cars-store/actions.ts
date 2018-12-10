import { Action } from '@ngrx/store';

import { Car } from '../../models';

export enum ActionTypes {
  GET_CARS = '[Cars] GET_CARS',
  GET_CARS_SUCCESS = '[Cars] GET_CARS_SUCCESS',
  GET_CARS_FAILURE = '[Cars] GET_CARS_FAILURE',
  ADD_CAR = '[Cars] ADD_CAR',
  ADD_CAR_SUCCESS = '[Cars] ADD_CAR_SUCCESS',
  ADD_CAR_FAILURE = '[Cars] ADD_CAR_FAILURE',
  UPDATE_CAR = '[Cars] UPDATE_CAR',
  UPDATE_CAR_SUCCESS = '[Cars] UPDATE_CAR_SUCCESS',
  UPDATE_CAR_FAILURE = '[Cars] UPDATE_CAR_FAILURE',
  DELETE_CAR = '[Cars] DELETE_CAR',
  DELETE_CAR_SUCCESS = '[Cars] DELETE_CAR_SUCCESS',
  DELETE_CAR_FAILURE = '[Cars] DELETE_CAR_FAILURE',
}

export class AddCar implements Action {
  readonly type = ActionTypes.ADD_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class AddCarSuccess implements Action {
  readonly type = ActionTypes.ADD_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class DeleteCar implements Action {
  readonly type = ActionTypes.DELETE_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class DeleteCarSuccess implements Action {
  readonly type = ActionTypes.DELETE_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class UpdateCar implements Action {
  readonly type = ActionTypes.UPDATE_CAR;

  constructor(
    public payload: Car,
  ) {}
}

export class UpdateCarSuccess implements Action {
  readonly type = ActionTypes.UPDATE_CAR_SUCCESS;

  constructor(
    public payload: Car,
  ) {}
}

export class GetCars implements Action {
  readonly type = ActionTypes.GET_CARS;
}

export class GetCarsSuccess implements Action {
  readonly type = ActionTypes.GET_CARS_SUCCESS;

  constructor(
    public payload: Car[],
  ) {}
}

export type Actions =
  | GetCars
  | GetCarsSuccess
  | AddCar
  | AddCarSuccess
  | UpdateCar
  | UpdateCarSuccess
  | DeleteCar
  | DeleteCarSuccess;
