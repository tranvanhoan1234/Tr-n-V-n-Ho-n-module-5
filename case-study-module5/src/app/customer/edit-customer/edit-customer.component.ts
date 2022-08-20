import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../module/customer-type';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerFrom: FormGroup;
  id: number;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,private customerType:CustomerTypeService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerFrom = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        dateOfBirth: new FormControl(customer.dateOfBirth, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        cardNumber: new FormControl(customer.cardNumber, [Validators.required, Validators.pattern(/^[0-9]{9,12}$/)]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern(/^[\+84||09][0-9]{9,10}$/)]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        guestType: new FormControl(customerType, [Validators.required]),
        address: new FormControl(customer.address, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerType.getAll();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(id: number) {
    const customer = this.customerFrom.value;
    console.log(this.customerFrom.value);
    this.customerService.updateCustomer(id, customer);
    this.router.navigateByUrl('/customer/list').then(() => {
      setTimeout(() => {
        alert('Them moi thanh cong!');
      }, 200);
    });
  }
}
