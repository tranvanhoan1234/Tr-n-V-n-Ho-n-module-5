import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityRentalTypeService} from '../../service/facility-rental-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentalType} from '../../module/rental-type';
import {FacilityType} from '../../module/facility-type';

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
        idFacility: new FormControl(facility.idFacility),
        serviceName: new FormControl(facility.serviceName),
        usableArea: new FormControl(facility.usableArea),
        rentalCosts: new FormControl(facility.rentalCosts),
        maxNumberOfPeople: new FormControl(facility.maxNumberOfPeople),
        typeRental: new FormControl(facility.rentalType),
        roomStandard: new FormControl(facility.roomStandard),
        poolArea: new FormControl(facility.poolArea),
        otherAmenitiesDescription: new FormControl(facility.otherAmenitiesDescription),
        ofFloors: new FormControl(facility.ofFloors),
        freeServiceIncluded: new FormControl(facility.freeServiceIncluded),
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
    this.facilityService.updateFacility(id,facility);
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
