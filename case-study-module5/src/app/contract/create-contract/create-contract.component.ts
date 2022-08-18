import { Component, OnInit } from '@angular/core';
import {Customer} from '../../module/customer';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ad=new FormGroup({
    name: new FormControl('')

  })

}
