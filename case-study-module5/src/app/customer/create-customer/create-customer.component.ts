import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../module/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.customerTypeList=this.customerTypeService.getAll();
  }

  createForm() {
    this.customerForm = new FormGroup({
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      cardNumber: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      guestType: new FormControl(),
      address: new FormControl(),
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    this.router.navigateByUrl('/customer/list').then(() => {
      setTimeout(() => {
        alert('Them moi thanh cong!');
      }, 200);
    });
  }
}
