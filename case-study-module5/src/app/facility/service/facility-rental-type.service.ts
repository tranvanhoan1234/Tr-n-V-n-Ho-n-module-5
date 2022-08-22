import {Injectable} from '@angular/core';
import {RentalType} from '../module/rental-type';
import {FacilityType} from '../module/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityRentalTypeService {
  facilityRentalList: RentalType[] = [
    {id: 1, name: 'năm'},
    {id: 2, name: 'tháng'},
    {id: 3, name: 'ngày'},
    {id: 4, name: 'giờ'}];

  constructor() {
  }

  getAll() :FacilityType[] {
    return this.facilityRentalList;
  }
}
