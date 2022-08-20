import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../../service/service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerDelete:Customer;
  id: number;
  constructor(private customerService: CustomerService) {

  }
  ngOnInit(): void {
    this.getAll();
  };
  getAll() {
    this.customers = this.customerService.getAll();
  }

  deleteCustomer(item: Customer) {
    this.customerDelete=item;
  }

  remove() {
    this.customerService.deleteProduct(this.customerDelete.id);
  }
}
