import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {FacilityRentalTypeService} from '../service/facility-rental-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentalType} from '../module/rental-type';
import {FacilityType} from '../module/facility-type';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  facilityRenType: RentalType[] = [];
  facilityTypeName: FacilityType[] = [];
  id: number;
  typeValue = '0:1';

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private facilityRenTypeService: FacilityRentalTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        serviceName: new FormControl(facility.serviceName, [Validators.required]),
        usableArea: new FormControl(facility.usableArea, [Validators.required]),
        rentalCosts: new FormControl(facility.rentalCosts, [Validators.required]),
        maxNumberOfPeople: new FormControl(facility.maxNumberOfPeople, [Validators.required]),
        typeRental: new FormControl(facility.rentalType, [Validators.required]),
        roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required,Validators.pattern('^\\d*[1-9]\\d*$')]),
        otherAmenitiesDescription: new FormControl(facility.otherAmenitiesDescription, [Validators.required]),
        ofFloors: new FormControl(facility.ofFloors, [Validators.required,Validators.pattern('^\\d*[1-9]\\d*$')]),
        freeServiceIncluded: new FormControl(facility.freeServiceIncluded, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.facilityRenType = this.facilityRenTypeService.getAll();
    this.facilityTypeName = this.facilityTypeService.facilityTypeList;
  }
  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }
  updateCustomer(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    this.facilityForm.reset();
    this.router.navigateByUrl('/facility/list').then(() => {
      setTimeout(() => {
        alert('Them moi thanh cong!');
      }, 200);
    });
  }
  setFacility(event) {
    this.typeValue = event.target.value;
    console.log(event);
    if (this.typeValue === '1') {
    } else if (this.typeValue === '2') {

    } else if (this.typeValue === '3') {
    }
  }
}
