import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Car } from '../car.model';
import { CarService } from '../car.service';
import { listAnimation } from '../animations';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  animations: [listAnimation]
})
export class CarListComponent implements OnInit, OnDestroy {
  cars: Car[];
  columnsToDisplay = ['manufacturer', 'type', 'prodDate', 'color'];
  carsChangedSubscription: Subscription;
  dataSource: MatTableDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.cars = this.carService.getCars();
    this.dataSource = new MatTableDataSource<Car>(this.cars);
    this.dataSource.paginator = this.paginator;

    this.carsChangedSubscription = this.carService.carsChanged.subscribe((cars) => {
      this.cars = cars;
      this.dataSource = new MatTableDataSource<Car>(this.cars);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnDestroy() {
    this.carsChangedSubscription.unsubscribe();
  }

}
