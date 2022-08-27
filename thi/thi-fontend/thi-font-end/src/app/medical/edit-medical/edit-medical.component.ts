import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../model/patient";
import {MedicalRecordService} from "../../service/medical-record.service";
import {PatientService} from "../../service/patient.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit-medical',
  templateUrl: './edit-medical.component.html',
  styleUrls: ['./edit-medical.component.css']
})
export class EditMedicalComponent implements OnInit {
  medicalForm: FormGroup;
  id: number;
  parientList: Patient[] = [];

  constructor(private medicalRecordService : MedicalRecordService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.medicalRecordService.findById(this.id).subscribe(data => {
        this.medicalForm.patchValue(data);
      });
    });

     this.medicalForm = new FormGroup({
       medicalRecordCode: new FormControl(''),
       namePeoplePatient: new FormControl(''),
       patient: new FormControl(''),
       dateOfAdmission: new FormControl(''),
       dischargeDate: new FormControl(''),
       season: new FormControl(''),
       treatments: new FormControl(''),
       doctor: new FormControl('')
     });
  }
  ngOnInit() {
    this.getCustomerType();
  }
  updateMedical(id: number) {
    const medical = this.medicalForm.value;
    this.medicalRecordService.updateRecord(id, medical).subscribe(() => {
      this.router.navigateByUrl('/benhAn/list').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
    });
  }
  getCustomerType() {
    this.patientService.getAll().subscribe(value => {
      this.parientList = value;
    });
  }
}
