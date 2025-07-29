package com.example.healthtracker.service;

import com.example.healthtracker.dto.HealthDataDto;
import com.example.healthtracker.exception.CustomException;
import com.example.healthtracker.model.HealthData;
import com.example.healthtracker.model.User;
import com.example.healthtracker.repository.HealthDataRepository;
import com.example.healthtracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class HealthDataService {
    private final HealthDataRepository healthDataRepository;
    private final UserRepository userRepository;

    public HealthDataService(HealthDataRepository healthDataRepository, UserRepository userRepository) {
        this.healthDataRepository = healthDataRepository;
        this.userRepository = userRepository;
    }

    public HealthData saveOrUpdateHealthData(String userId, HealthDataDto healthDataDto) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new CustomException("User not found"));

        HealthData healthData = healthDataRepository.findByUserAndDate(user, healthDataDto.getDate())
                .orElse(new HealthData());

        healthData.setUser(user);
        healthData.setDate(healthDataDto.getDate());
        healthData.setBreakfast(HealthData.MealStatus.valueOf(healthDataDto.getBreakfast().toUpperCase()));
        healthData.setLunch(HealthData.MealStatus.valueOf(healthDataDto.getLunch().toUpperCase()));
        healthData.setDinner(HealthData.MealStatus.valueOf(healthDataDto.getDinner().toUpperCase()));
        healthData.setSnacks(HealthData.MealStatus.valueOf(healthDataDto.getSnacks().toUpperCase()));
        healthData.setWorkout(HealthData.WorkoutStatus.valueOf(healthDataDto.getWorkout().toUpperCase()));
        healthData.setSleepHours(healthDataDto.getSleepHours());
        healthData.setMood(healthDataDto.getMood());
        healthData.setRemarks(healthDataDto.getRemarks());

        return healthDataRepository.save(healthData);
    }

    public List<HealthData> getHealthDataByRange(String userId, String range) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new CustomException("User not found"));

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = switch (range) {
            case "week" -> endDate.minusDays(7);
            case "month" -> endDate.minusMonths(1);
            case "3months" -> endDate.minusMonths(3);
            default -> throw new CustomException("Invalid time range");
        };

        return healthDataRepository.findByUserAndDateBetween(user, startDate, endDate);
    }

    public HealthData getHealthDataByDate(String userId, LocalDate date) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new CustomException("User not found"));

        return healthDataRepository.findByUserAndDate(user, date)
                .orElse(new HealthData());
    }
}