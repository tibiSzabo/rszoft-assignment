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
  manufacturers: string[];
  carsChanged = new Subject<Car[]>();

  constructor() {
    this.manufacturers = this.initManufacturers();
  }

  getCars(): Car[] {
    return this.cars.slice();
  }

  getManufacturers(): string[] {
    return this.manufacturers.slice();
  }

  addCar(car: Car) {
    this.cars.push(car);
    if (!this.manufacturerAdded(car.manufacturer)) {
      this.manufacturers.push(car.manufacturer);
    }
    this.carsChanged.next(this.cars.slice());
  }

  initManufacturers(): string[] {
    const result: string[] = [];
    for (const car of this.cars) {
      result.push(car.manufacturer);
    }
    return result;
  }

  manufacturerAdded(manufacturer: string): boolean {
    return this.manufacturers.includes(manufacturer);
  }

}
