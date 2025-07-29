package com.example.healthtracker.repository;

import com.example.healthtracker.model.HealthData;
import com.example.healthtracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface HealthDataRepository extends JpaRepository<HealthData, Long> {
    List<HealthData> findByUserAndDateBetween(User user, LocalDate startDate, LocalDate endDate);
    Optional<HealthData> findByUserAndDate(User user, LocalDate date);
}