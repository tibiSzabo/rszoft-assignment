import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [
    new Car('Ford', 'Focus', new Date(), 'Red'),
    new Car('Opel', 'Corsa', new Date(), 'White'),
    new Car('Suzuki', 'Swift', new Date())
  ];

  columnsToDisplay = ['manufacturer', 'type', 'prodDate', 'color'];

  constructor() {
  }

  ngOnInit() {
  }

}
