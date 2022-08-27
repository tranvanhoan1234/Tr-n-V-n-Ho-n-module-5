import {Patient} from "./patient";

export interface MedicalRecord{
  id?: number;
  medicalRecordCode?: string;
  namePeoplePatient?:string;
  patient?:Patient;
  dateOfAdmission?: string;
  dischargeDate?: string;
  season?: string;
  treatments?: string;
  doctor?: string;
}
