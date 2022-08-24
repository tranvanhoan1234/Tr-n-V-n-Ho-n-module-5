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
      this.facilityService.findById(this.id).subscribe(facility => {
        this.facilityForm.patchValue(facility);

      });
    });
    this.facilityForm = new FormGroup({
      serviceName: new FormControl('', [Validators.required]),
      usableArea: new FormControl('', [Validators.required]),
      rentalCosts: new FormControl('', [Validators.required]),
      maxNumberOfPeople: new FormControl('', [Validators.required]),
      typeRental: new FormControl('', [Validators.required]),
      roomStandard: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
      otherAmenitiesDescription: new FormControl('', [Validators.required]),
      ofFloors: new FormControl('', [Validators.required, Validators.pattern('^\\d*[1-9]\\d*$')]),
      url: new FormControl(''),
      freeServiceIncluded: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllRenType();
    this.facilityTypeName = this.facilityTypeService.facilityTypeList;
  }

  private getFacility(id: number) {
    return;

  }

  updateCustomer(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      this.router.navigateByUrl('/facility/list').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
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

  getAllType() {

  }

  getAllRenType() {
    this.facilityRenTypeService.getAll().subscribe(data => {
      return this.facilityRenType = data;
    });
  }
}
