import { Car } from '../../models';

export interface State {
  cars: Car[];
}

export const initialState: State = {
  cars: []
};
