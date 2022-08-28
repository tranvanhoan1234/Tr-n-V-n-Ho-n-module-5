import {Component, OnInit} from '@angular/core';
import {MedicalRecordService} from '../../service/medical-record.service';
import {PatientService} from '../../service/patient.service';
import {Router} from '@angular/router';
import {Patient} from '../../model/patient';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-medical',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  medicalForm: FormGroup;
  patientsList: Patient[] = [];

  constructor(private medicalRecordService: MedicalRecordService,
              private patientService: PatientService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.getPatient();
    this.createForm();
  }
  createForm() {
    this.medicalForm = new FormGroup({
      medicalRecordCode: new FormControl(),
      namePeoplePatient: new FormControl(),
      patient: new FormControl(),
      dateOfAdmission: new FormControl(),
      dischargeDate: new FormControl(),
      season: new FormControl(),
      treatments: new FormControl(),
      doctor: new FormControl()
    });
  }
  getPatient() {
    this.patientService.getAll().subscribe(value => {
      this.patientsList = value;
    });
  }

  submit() {
    const medical = this.medicalForm.value;
    this.medicalRecordService.saveRecord(medical).subscribe(() => {
      this.medicalForm.reset();
      this.router.navigate(['/']);
      setTimeout(() => {
        alert('tạo thành công !');
      }, 200);
    });
  }
}
