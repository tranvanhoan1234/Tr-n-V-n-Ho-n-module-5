import {Injectable} from '@angular/core';
import {FacilityType} from '../module/facility-type';
import {Observable} from 'rxjs';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private URL_API=("http://localhost:3000/facilityType")
  facilityTypeList: FacilityType[] = [];

  constructor(private httpClient:HttpClient) {
    this.facilityTypeList.push({
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
  getAll():Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(this.URL_API+'/')
  }
}
