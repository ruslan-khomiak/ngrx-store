import { Actions, ActionTypes } from './actions';
import { Car } from '../../models';
import { initialState } from './state';

export function carsStoreReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        cars: [...action.payload],
      };
    case ActionTypes.ADD_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case ActionTypes.UPDATE_CAR_SUCCESS:
      const index = state.cars.findIndex((car: Car) => car.id === action.payload.id);
      state.cars[index] = action.payload;
      return {
        ...state,
        cars: [...state.cars],
      };
    case ActionTypes.DELETE_CAR_SUCCESS:
      return {
        ...state,
        cars: [...state.cars.filter((car: Car) => car.id !== action.payload.id)],
      };
    default: {
      return state;
    }
  }
}
