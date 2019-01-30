import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  }
}
