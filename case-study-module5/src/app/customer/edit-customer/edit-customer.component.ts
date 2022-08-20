import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerFrom: FormGroup;
  id: number;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerFrom = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        gender: new FormControl(customer.gender),
        cardNumber: new FormControl(customer.cardNumber),
        phoneNumber: new FormControl(customer.phoneNumber),
        email: new FormControl(customer.email),
        guestType: new FormControl(customer.guestType),
        address: new FormControl(customer.address),
      });
    });
  }

  ngOnInit(): void {
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(id: number) {
    const customer = this.customerFrom.value;
    console.log(this.customerFrom.value)
    this.customerService.updateCustomer(id, customer);
    this.router.navigateByUrl('/customer/list').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
  }
}
