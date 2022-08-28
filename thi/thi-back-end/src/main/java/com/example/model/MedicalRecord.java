package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "medicalRecord")
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String medicalRecordCode;
    @ManyToOne
    @JoinColumn(name = "id_patient",referencedColumnName = "id")
    private Patient patient;
    private String namePeoplePatient;
    private Date dateOfAdmission;
    private Date dischargeDate;
    private String season;
    private String treatments;
    private String doctor;
    public MedicalRecord() {
    }
    public MedicalRecord(Integer id, String medicalRecordCode, Patient patient, String namePeoplePatient, Date dateOfAdmission, Date dischargeDate, String season, String treatments, String doctor) {
        this.id = id;
        this.medicalRecordCode = medicalRecordCode;
        this.patient = patient;
        this.namePeoplePatient = namePeoplePatient;
        this.dateOfAdmission = dateOfAdmission;
        this.dischargeDate = dischargeDate;
        this.season = season;
        this.treatments = treatments;
        this.doctor = doctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMedicalRecordCode() {
        return medicalRecordCode;
    }

    public void setMedicalRecordCode(String medicalRecordCode) {
        this.medicalRecordCode = medicalRecordCode;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getNamePeoplePatient() {
        return namePeoplePatient;
    }

    public void setNamePeoplePatient(String namePeoplePatient) {
        this.namePeoplePatient = namePeoplePatient;
    }

    public Date getDateOfAdmission() {
        return dateOfAdmission;
    }

    public void setDateOfAdmission(Date dateOfAdmission) {
        this.dateOfAdmission = dateOfAdmission;
    }

    public Date getDischargeDate() {
        return dischargeDate;
    }

    public void setDischargeDate(Date dischargeDate) {
        this.dischargeDate = dischargeDate;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
