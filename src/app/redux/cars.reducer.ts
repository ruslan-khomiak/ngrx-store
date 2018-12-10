import { CAR_ACTION, CarsAction } from './cars.action';
import { Car } from '../car.model';

const initialState = {
  cars: []
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.LOAD_CARS_SUCCESS:
      return {
        ...state,
        cars: [...action.payload],
      };
    case CAR_ACTION.ADD_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case CAR_ACTION.UPDATE_CAR_SUCCESS:
      const index = state.cars.findIndex((car: Car) => car.id === action.payload.id);
      state.cars[index] = action.payload;
      return {
        ...state,
        cars: [...state.cars],
      };
    case CAR_ACTION.DELETE_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars.filter((car: Car) => car.id !== action.payload.id)],
      };
    default: return state;
  }
}
