package com.example.controller;

import com.example.model.Patient;
import com.example.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/benhNhan")
public class PatientController {
    @Autowired
    private IPatientService iPatientService;

    @GetMapping("/list")
    public ResponseEntity<List<Patient>> getPatient() {
        List<Patient> patient = iPatientService.findAll();
        if (patient.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }
}
