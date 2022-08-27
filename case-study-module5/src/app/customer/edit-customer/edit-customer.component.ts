import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerType} from '../module/customer-type';
import {checkDate} from '../../validate/check-date';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerFrom: FormGroup;
  id: number;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findById(this.id).subscribe(data => {
        this.customerFrom.patchValue(data);
      });
    });

    this.customerFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
      dateOfBirth: new FormControl('', [Validators.required,checkDate]),
      gender: new FormControl(''),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[\+84||09][0-9]{9,10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl(''),
      address: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {
    this.getCustomerType();
  }
  updateCustomer(id: number) {
    const customer = this.customerFrom.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      this.router.navigateByUrl('/customer/list').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
    });
  }
  getCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    });
  }
}
