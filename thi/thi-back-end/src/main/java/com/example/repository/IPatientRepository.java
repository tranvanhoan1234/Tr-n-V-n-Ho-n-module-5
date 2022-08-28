package com.example.repository;

import com.example.model.MedicalRecord;
import com.example.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IPatientRepository extends JpaRepository<Patient, Integer> {
    @Query(value = "select * from patient", nativeQuery = true)
    List<Patient> findAllPatient();

}
