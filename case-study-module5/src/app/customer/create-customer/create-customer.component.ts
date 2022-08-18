import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerFrom: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl([Validators.required]),
    dateOfBirth: new FormControl([Validators.required]),
    gender: new FormControl(),
    cardNumber: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    guestType: new FormControl(),
    address: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   const customer = this.customerFrom.value;
  //   this.customerFrom.reset(customer);
  // }


  onSumbit() {
    return this.customerFrom;
  }
}
