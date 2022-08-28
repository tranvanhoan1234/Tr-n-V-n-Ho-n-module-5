package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String patientCode;
    @JsonIgnore
    @OneToMany(mappedBy = "patient")
    private List<MedicalRecord> medicalRecordList;

    public Patient() {
    }

    public Patient(Integer id, String patientCode, List<MedicalRecord> medicalRecordList) {
        this.id = id;
        this.patientCode = patientCode;
        this.medicalRecordList = medicalRecordList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPatientCode() {
        return patientCode;
    }

    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    public List<MedicalRecord> getMedicalRecordList() {
        return medicalRecordList;
    }

    public void setMedicalRecordList(List<MedicalRecord> medicalRecordList) {
        this.medicalRecordList = medicalRecordList;
    }
}
