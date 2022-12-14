import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../service/facility.service';
import {Router} from '@angular/router';
import {FacilityRentalTypeService} from '../service/facility-rental-type.service';
import {RentalType} from '../module/rental-type';
import {FacilityTypeService} from '../service/facility-type.service';
import {FacilityType} from '../module/facility-type';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  typeRental: RentalType[] = [];
  facilityType: FacilityType[] = [];
  typeValue = '0:1';
  id: number;

  constructor(private facilityService: FacilityService,
              private typeRentalService: FacilityRentalTypeService,
              private typeFacilityService: FacilityTypeService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.saveFacility();
    this.getAllRenType();
    this.getAllType();
  }

  saveFacility() {
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
    console.log(this.facilityForm);
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.facilityForm.reset();
      this.router.navigate(['/facility/list']);
      setTimeout(() => {
        alert('Th??m m???i th??nh c??ng!');
      }, 200);
    });
  }

  setFacility(event) {
    this.typeValue = event.target.value;
    if (this.typeValue === '0:1') {
      this.facilityForm.patchValue({freeServiceIncluded: NaN});
    } else if (this.typeValue === '1:2') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({freeServiceIncluded: NaN});
    } else if (this.typeValue === '2:3') {
      this.facilityForm.patchValue({poolArea: 0});
      this.facilityForm.patchValue({ofFloors: 0});
      this.facilityForm.patchValue({otherAmenitiesDescription: NaN});
      this.facilityForm.patchValue({roomStandard: NaN});
    }
  }

  getAllType() {
    this.typeFacilityService.getAll().subscribe(value => {
      this.facilityType = value;
    });
  }

  getAllRenType() {
    this.typeRentalService.getAll().subscribe(value => {
      this.typeRental = value;
    });
  }
}

