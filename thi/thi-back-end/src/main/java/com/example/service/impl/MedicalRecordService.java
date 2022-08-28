package com.example.service.impl;

import com.example.model.MedicalRecord;
import com.example.repository.IMedicalRecordRepository;
import com.example.service.IMedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalRecordService implements IMedicalRecordService {
    @Autowired
    IMedicalRecordRepository iMedicalRecordRepository;

    @Override
    public List<MedicalRecord> findAll() {
        return iMedicalRecordRepository.findAllMedical();
    }
    @Override
    public void save(MedicalRecord medicalRecord) {
        iMedicalRecordRepository.save(medicalRecord);
    }
    @Override
    public void delete(int id) {
        iMedicalRecordRepository.deleteById(id);
    }
    @Override
    public MedicalRecord findById(int id) {
        return iMedicalRecordRepository.findByIdMedical(id);
    }
    @Override
    public List<MedicalRecord> searchMedical(String search) {
        return iMedicalRecordRepository.searchMedical(search);

    }

}
