import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {Customer} from '../../customer/module/customer';
import {Facility} from '../../facility/module/facility';
import {CustomerService} from '../../customer/service/customer.service';
import {FacilityService} from '../../facility/service/facility.service';


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
