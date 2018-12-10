import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Car } from './car.model';

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
  ) {}

  loadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(CarsService.BASE_URL + 'cars');
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(CarsService.BASE_URL + 'cars', car);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(CarsService.BASE_URL + 'cars/' + car.id, car);
  }

  deleteCar(car: Car): Observable<Car> {
    return this.http.delete<Car>(CarsService.BASE_URL + 'cars/' + car.id);
  }
}
