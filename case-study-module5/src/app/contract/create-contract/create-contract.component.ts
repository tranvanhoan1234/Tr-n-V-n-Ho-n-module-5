import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {

  }

  ngOnInit(): void {

  }
  contract = new FormGroup({
    name: new FormControl('')

  });

}
