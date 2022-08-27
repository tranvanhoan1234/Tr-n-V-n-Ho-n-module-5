import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalRecord} from "../model/medical-record";
import {environment} from "../../environments/environment";

const URL_API = `${environment.ariUrl}`

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>(URL_API + '/benhAn/list')
  }

  saveRecord(medicalRecord) {
    return this.httpClient.post<MedicalRecord>(URL_API + '/benhAn/create', medicalRecord);
  }

  findById(id: number): Observable<MedicalRecord> {
    return this.httpClient.get<MedicalRecord>(`${URL_API}'/benhAn/findById'${id}`);
  }

  updateRecord(id: number, medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.httpClient.put<MedicalRecord>(`${URL_API}'/benhAn/update'${id}`, medicalRecord)
  }

  deleteRecord(id: number): Observable<MedicalRecord> {
    return this.httpClient.delete<MedicalRecord>(`${URL_API}'/benhAn/delete'${id}`)
  }
}
