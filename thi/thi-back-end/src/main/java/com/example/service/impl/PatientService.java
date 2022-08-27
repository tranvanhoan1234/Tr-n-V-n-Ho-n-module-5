package com.example.service.impl;

import com.example.model.MedicalRecord;
import com.example.model.Patient;
import com.example.repository.IPatientRepository;
import com.example.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PatientService implements IPatientService {
    @Autowired
    IPatientRepository iPatientRepository;

    @Override
    public List<Patient> findAll() {
        return iPatientRepository.findAllPatient();
    }

}
