import { Component, OnDestroy, OnInit } from '@angular/core';

import { Car } from '../car.model';
import { CarService } from '../car.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {
  cars: Car[];
  columnsToDisplay = ['manufacturer', 'type', 'prodDate', 'color'];
  carsChangedSubscription: Subscription;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.cars = this.carService.getCars();
    this.carsChangedSubscription = this.carService.carsChanged.subscribe(cars => this.cars = cars);
  }

  ngOnDestroy() {
    this.carsChangedSubscription.unsubscribe();
  }

}
