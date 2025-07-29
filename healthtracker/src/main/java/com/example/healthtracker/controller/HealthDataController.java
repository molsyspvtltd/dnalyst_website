package com.example.healthtracker.controller;

import com.example.healthtracker.dto.HealthDataDto;
import com.example.healthtracker.model.HealthData;
import com.example.healthtracker.service.HealthDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/health-data")
public class HealthDataController {
    private final HealthDataService healthDataService;

    public HealthDataController(HealthDataService healthDataService) {
        this.healthDataService = healthDataService;
    }

    @PostMapping
    public ResponseEntity<HealthData> saveHealthData(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody HealthDataDto healthDataDto) {
        HealthData savedData = healthDataService.saveOrUpdateHealthData(
                userDetails.getUsername(), healthDataDto);
        return ResponseEntity.ok(savedData);
    }

    @GetMapping
    public ResponseEntity<HealthData> getHealthDataByDate(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam String date) {
        LocalDate localDate = LocalDate.parse(date);
        HealthData healthData = healthDataService.getHealthDataByDate(
                userDetails.getUsername(), localDate);
        return ResponseEntity.ok(healthData);
    }

    @GetMapping("/history")
    public ResponseEntity<List<HealthData>> getHealthDataHistory(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam String range) {
        List<HealthData> healthDataList = healthDataService.getHealthDataByRange(
                userDetails.getUsername(), range);
        return ResponseEntity.ok(healthDataList);
    }
}