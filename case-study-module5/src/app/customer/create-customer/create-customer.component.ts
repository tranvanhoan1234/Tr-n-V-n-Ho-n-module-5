import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../module/customer-type';
import {CustomerTypeService} from '../../service/customer-type.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

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
    this.customerTypeList = this.customerTypeService.getAll();
  }
  createForm() {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\+84||09][0-9]{9,10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      guestType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
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
