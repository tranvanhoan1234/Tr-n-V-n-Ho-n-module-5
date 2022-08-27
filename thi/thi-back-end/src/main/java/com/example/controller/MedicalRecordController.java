package com.example.controller;

import com.example.model.MedicalRecord;
import com.example.model.Patient;
import com.example.service.IMedicalRecordService;
import com.example.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/benhAn")
public class MedicalRecordController {

    @Autowired
    private IMedicalRecordService iMedicalRecordService;
    @Autowired
    private IPatientService iPatientService;

    @ModelAttribute
    private List<Patient> getPatient() {
        return this.iPatientService.findAll();
    }
    @GetMapping("/list")
    public ResponseEntity<List<MedicalRecord>> getMedical() {
        List<MedicalRecord> medicalRecords = iMedicalRecordService.findAll();
        if (medicalRecords.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalRecords, HttpStatus.OK);
    }
    @GetMapping("findById/{id}")
    public ResponseEntity<MedicalRecord> findById(@PathVariable("id") int id) {
        MedicalRecord medicalRecord = iMedicalRecordService.findById(id);
        if (medicalRecord == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<MedicalRecord> create(@RequestBody MedicalRecord medicalRecord) {
        iMedicalRecordService.save(medicalRecord);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<MedicalRecord> update(@PathVariable("id") Integer id, @RequestBody MedicalRecord medicalRecord) {
        if (medicalRecord == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        iMedicalRecordService.save(medicalRecord);
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<MedicalRecord> delete(@PathVariable("id") int id) {
        MedicalRecord medicalRecord = iMedicalRecordService.findById(id);
        if (medicalRecord == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iMedicalRecordService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}