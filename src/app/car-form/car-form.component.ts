import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private snackBar: MatSnackBar) {
    this.carForm = this.formBuilder.group({
      'manufacturer': ['', Validators.required],
      'type': ['', Validators.required],
      'date': ['', Validators.required],
      'color': ''
    });
  }

  ngOnInit() {
  }

  onSaveForm() {
    this.carService.addCar(new Car(
      this.carForm.value.manufacturer,
      this.carForm.value.type,
      this.carForm.value.date.valueOf(),
      this.carForm.value.color ? this.carForm.value.color : null
    ));
    this.snackBar.open('Car saved successfully!', '', {duration: 2000, verticalPosition: 'top'});
  }
}
