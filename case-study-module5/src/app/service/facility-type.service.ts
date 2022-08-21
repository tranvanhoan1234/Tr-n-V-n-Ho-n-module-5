import {Injectable} from '@angular/core';
import {FacilityType} from '../module/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityType: FacilityType[] = [];

  constructor() {
    this.facilityType.push({
      id: 1,
      name: 'villa'
    }, {
      id: 2,
      name: 'house'
    }, {
      id: 3,
      name: 'room'
    });
  }
}
