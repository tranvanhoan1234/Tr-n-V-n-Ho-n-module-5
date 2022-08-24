import {Component, OnInit} from '@angular/core';
import {Facility} from '../module/facility';
import {FacilityService} from '../service/facility.service';
import {Customer} from '../../customer/module/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[];
  facilityDelete: Facility;
  item: Facility;

  constructor(private facilityService: FacilityService,private router:Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.facilityService.getAll().subscribe(facility=>{
      this.facilityList=facility;
    });
  }
  deleteFacility(item: Customer) {
    this.facilityDelete = item;
  }
  remove() {
    this.facilityService.deleteFacility(this.facilityDelete.id).subscribe(() => {
      setTimeout(() => {
        this.getAll();
        alert('tạo thành công !');
        this.router.navigate(['facility/list']);
      }, 200);
    });
  }
}
