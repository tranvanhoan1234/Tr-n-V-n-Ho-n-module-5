package com.example.repository;

import com.example.model.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {
    @Query(value = "select * from medical_record", nativeQuery = true)
    List<MedicalRecord> findAllMedical();

    @Query(value = "select * from medical_record where id=id", nativeQuery = true)
    MedicalRecord findByIdMedical(int id);
}
