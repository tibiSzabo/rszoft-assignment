import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    new Car('Ford', 'Focus', new Date(), 'Red'),
    new Car('Opel', 'Corsa', new Date(), 'White'),
    new Car('Suzuki', 'Swift', new Date())
  ];
  carsChanged = new Subject<Car[]>();

  constructor() {
  }

  getCars(): Car[] {
    return this.cars.slice();
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }
}
