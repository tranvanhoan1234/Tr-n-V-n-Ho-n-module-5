import {Component, OnInit} from '@angular/core';
import {Facility} from '../module/facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityList = this.facilityService.getAll();
  }
}
