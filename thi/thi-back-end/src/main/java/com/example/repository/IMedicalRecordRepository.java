package com.example.repository;

import com.example.model.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IMedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {
    @Query(value = "select * from medical_record join patient on medical_record.id = patient.id", nativeQuery = true)
    List<MedicalRecord> findAllMedical();

    @Transactional
    @Query(value = "select * from medical_record where id= :id", nativeQuery = true)
    MedicalRecord findByIdMedical(@Param("id") int id);

    @Query("select p from MedicalRecord p where p.medicalRecordCode like concat('%',:search,'%') " +
            "or p.doctor like concat('%',:search,'%') ")
    List<MedicalRecord> searchMedical(String search);

}
