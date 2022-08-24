import {Component, OnInit} from '@angular/core';
import {Contract} from '../module/contract';
import {ContractService} from '../service/contract.service';
@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  contract: Contract[] = [];
  constructor(private contractService: ContractService) {
  }
  ngOnInit(): void {
    this.contract = this.contractService.getAll();
  }
}
