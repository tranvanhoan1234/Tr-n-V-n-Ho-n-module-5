// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';


// @ts-ignore
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];

  constructor() {
    this.customerList.push({
      id: 1,
      name: 'Trần Văn Hoàn',
      dateOfBirth: '12/3/1993',
      gender: 'name',
      cardNumber: '34512364612',
      phoneNumber: '012374623',
      email: 'keongot@gmail.com',
      guestType: 'vip',
      address: 'dn',

    });

  };

  ngOnInit(): void {

  }

}
