import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {Customer} from '../module/customer';
import {Facility} from '../module/facility';
import {CustomerService} from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [{
    idContract: 1,
  contractDate: '2022/12/3', contractEndDate: '2022/1/3', deposits: '10.000'
  }];

  constructor() {

  }
}
