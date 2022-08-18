import {Component, OnInit} from '@angular/core';
import {Contract} from '../../module/contract';
import {Customer} from '../../module/customer';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {
  contract: Contract[] = [];


  constructor() {
    this.contract.push({
        idContract: 1,
        customer: {id: 1, name: 'Trần Văn Hoàn '}, facility: {}, contractDate: '2022/12/3', contractEndDate: '2022/1/3', deposits: '10.000'
      }
    );
  }
  ngOnInit(): void {
  }

}
