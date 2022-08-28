import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../model/patient';
import {MedicalRecordService} from '../../service/medical-record.service';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-medical',
  templateUrl: './edit-medical.component.html',
  styleUrls: ['./edit-medical.component.css']
})
export class EditMedicalComponent implements OnInit {
  medicalForm: FormGroup;
  id: number;
  parientList: Patient[];

  constructor(private medicalRecordService: MedicalRecordService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.medicalRecordService.findById(this.id).subscribe(data => {
        this.medicalForm.patchValue(data);
      });
      this.medicalForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        medicalRecordCode: new FormControl('', [Validators.required]),
        namePeoplePatient: new FormControl('', [Validators.required]),
        patient: new FormControl('', [Validators.required]),
        dateOfAdmission: new FormControl('', [Validators.required]),
        dischargeDate: new FormControl('', [Validators.required]),
        season: new FormControl('', [Validators.required]),
        treatments: new FormControl('', [Validators.required]),
        doctor: new FormControl('', [Validators.required])
      });
    });
  }

  ngOnInit() {
    this.getPatient();
  }

  updateMedical(id: number) {
    const medical = this.medicalForm.value;
    this.medicalRecordService.updateRecord(id, medical).subscribe(() => {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          alert('Them moi thanh cong!');
        }, 200);
      });
    });
  }
  getPatient() {
    this.patientService.getAll().subscribe(value => {
      this.parientList = value;
    });
  }
}
