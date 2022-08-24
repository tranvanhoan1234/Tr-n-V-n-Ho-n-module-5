import {Injectable} from '@angular/core';
import {RentalType} from '../module/rental-type';
import {FacilityType} from '../module/facility-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityRentalTypeService {
  private URL_API = 'http://localhost:3000/rentalType';
  facilityRentalList: RentalType[] = [
    {id: 1, name: 'năm'},
    {id: 2, name: 'tháng'},
    {id: 3, name: 'ngày'},
    {id: 4, name: 'giờ'}];

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.httpClient.get<RentalType[]>(this.URL_API + '/');

  }
}
