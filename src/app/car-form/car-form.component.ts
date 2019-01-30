import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
              private carService: CarService) {
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
    console.log(this.carForm);
    console.log(this.carForm.value.date.valueOf());
    this.carService.addCar(new Car(
      this.carForm.value.manufacturer,
      this.carForm.value.type,
      this.carForm.value.date.valueOf(),
      this.carForm.value.color ? this.carForm.value.color : null
    ));
  }
}
