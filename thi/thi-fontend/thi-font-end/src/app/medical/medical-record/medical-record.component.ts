import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/medical-record";
import {MedicalRecordService} from "../../service/medical-record.service";
import {Router} from "@angular/router";
import {Patient} from "../../model/patient";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  deleteRecord: MedicalRecord;

  constructor(private medicalRecordService: MedicalRecordService, private patientService: PatientService, private router: Router) {
  }

  medicalRecord: MedicalRecord[] = [];
  patients: Patient[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.medicalRecordService.getAll().subscribe(value => {
      this.medicalRecord = value;
    });
    this.patientService.getAll().subscribe(value => {
      this.patients = value;
    })
  }

  recordDelete(item: MedicalRecord) {
    this.deleteRecord = item;
  }

  remove() {
    this.medicalRecordService.deleteRecord(this.deleteRecord.id).subscribe(() => {
      setTimeout(() => {
        this.getAll();
        alert('xoá thành công !');
        this.router.navigate(['/'])
      }, 200);
    });
  };
}
