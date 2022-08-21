import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [{
    id: 1,
    name: 'Trần Văn Hoàn',
    dateOfBirth: '12/3/1993',
    gender: 'nam',
    cardNumber: '34512364612',
    phoneNumber: '012374623',
    email: 'keongot@gmail.com',
    guestType: {id: 1, name: 'Diamond'},
    address: 'dn',
  }, {
    id: 2,
    name: 'Trần Văn Toàn',
    dateOfBirth: '12/3/1999',
    gender: 'nam',
    cardNumber: '1235342354',
    phoneNumber: '079374623',
    email: 'keochuangot@gmail.com',
    guestType: {id: 2, name: 'Platinium'},
    address: 'hà nội ',
  }];

  constructor() {
  }
  getAll() :Customer[] {
    return this.customerList;
  }

  saveCustomer(customer):void {
    this.customerList.push(customer);

  }

  findById(id: number):object {
    return this.customerList.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer):any {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        this.customerList[i] = customer;
      }
    }
  }
  deleteProduct(id: number):void {
    let index = this.customerList.findIndex(element => id = element.id);
    this.customerList.splice(index, 1);
  }
}
