import {Component, OnInit} from '@angular/core';
import {Customer} from '../module/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerDelete: Customer;
  id: number;
  p = 1;
  search: string;

  constructor(private customerService: CustomerService, private router: Router) {

  }

  ngOnInit() {
    this.getAll();
  };

  getAll() {
    this.customerService.getAll().subscribe(customer => {
        this.customers = customer;
      }
    );
  }

  deleteCustomer(item: Customer) {
    this.customerDelete = item;
  }

  remove() {
    this.customerService.deleteCustomer(this.customerDelete.id).subscribe(() => {
      setTimeout(() => {
        this.getAll();
        alert('tạo thành công !');
        this.router.navigate(['customer/list']);
      }, 200);
    });
  }
  searchCustomer() {
    return this.customerService.searchCustomer(this.search).subscribe(value => {
      this.customers = value;
      this.p = 1;
    });
  }
}
