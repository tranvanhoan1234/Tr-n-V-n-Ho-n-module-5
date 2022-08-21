import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';
import {Contract} from '../../module/contract';
import {Facility} from '../../module/facility';
import {Router} from '@angular/router';
import {checkDate} from '../../validate/check-date';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contract: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  contractForm: FormGroup = new FormGroup({
    idContract: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
    contractDate: new FormControl('', [Validators.required,checkDate]),
    contractEndDate: new FormControl('', [Validators.required,checkDate]),
    deposits: new FormControl('', [Validators.required,Validators.pattern(' ("^[1-9]+\\\\d*")')]),
  });
  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService:ContractService,private router:Router) {
  }
  ngOnInit(): void {
    this.customerList=this.customerService.getAll();
    this.facilityList=this.facilityService.getAll();
    this.contract=this.contractService.getAll();

  }
  submit() {
    const contract = this.contractForm.value;
    console.log(contract);
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    this.router.navigateByUrl('/contract/list').then(() => {
      setTimeout(() => {
        alert('Them moi thanh cong!');
      }, 200);
    });
  }
}
