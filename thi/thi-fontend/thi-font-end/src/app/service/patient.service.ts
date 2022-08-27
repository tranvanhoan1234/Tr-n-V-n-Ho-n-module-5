import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";
import {environment} from "../../environments/environment";

const URL_API = `${environment.ariUrl}`

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${URL_API + '/benhNhan/list'}`)
  }
}
