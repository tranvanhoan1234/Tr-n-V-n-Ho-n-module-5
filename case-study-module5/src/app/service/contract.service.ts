import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {Customer} from '../module/customer';
import {Facility} from '../module/facility';
import {CustomerService} from './customer.service';
import {FacilityService} from './facility.service';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  contractList: Contract[] = [{
    idContract: 1, customer: {name: 'Trần Văn Hoàn'},
    facility: {serviceName: 'villa'},
    contractDate: '2022/12/3', contractEndDate: '2022/1/3', deposits: '10.000'
  }];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  getAll(): Contract[] {
    return this.contractList;
  }

  saveContract(contract): number {
    return this.contractList.push(contract);
  }
}
