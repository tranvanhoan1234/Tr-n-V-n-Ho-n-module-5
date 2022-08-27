package com.example.service;

import com.example.model.MedicalRecord;
import java.util.List;

public interface IMedicalRecordService {
    List<MedicalRecord> findAll();

    void save(MedicalRecord medicalRecord);

    void delete(int id);
    MedicalRecord findById(int id);
}
