import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {FacilityRentalTypeService} from '../../service/facility-rental-type.service';
import {RentalType} from '../../module/rental-type';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  typeRental:RentalType[]=[]
  constructor(private facilityService: FacilityService,
              private typeRentalService:FacilityRentalTypeService,
              private router: Router,) {
  }
  ngOnInit(): void {
    this.saveFacility()
    this.typeRental=this.typeRentalService.getAll();
  }
  saveFacility() {
    this.facilityForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      serviceName :new FormControl('',[Validators.required]),
      usableArea:new FormControl('',[Validators.required]),
      rentalCosts:new FormControl('',[Validators.required]),
      maxNumberOfPeople:new FormControl('',[Validators.required]),
      typeRental: new FormControl('',[Validators.required]),
      roomStandard:new FormControl('',[Validators.required]),
      otherAmenitiesDescription:new FormControl('',[Validators.required]),
      ofFloors:new FormControl('',[Validators.required]),
      freeServiceIncluded:new FormControl('',[Validators.required]),
    });
  }

  submit() {
      const facility = this.facilityForm.value;
      this.facilityService.saveFacility(facility);
      this.facilityForm.reset();
      this.router.navigateByUrl('/facility/list').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
  }
}

