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
  }
  ngOnInit(): void {
  }

}
