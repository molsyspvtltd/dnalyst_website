package com.example.healthtracker.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "health_data")
public class HealthData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private MealStatus breakfast;

    @Enumerated(EnumType.STRING)
    private MealStatus lunch;

    @Enumerated(EnumType.STRING)
    private MealStatus dinner;

    @Enumerated(EnumType.STRING)
    private MealStatus snacks;

    @Enumerated(EnumType.STRING)
    private WorkoutStatus workout;

    private double sleepHours;
    private int mood;
    @Column(length = 1000)
    private String remarks;

    public enum MealStatus {
        COMPLETED, PARTIALLY_COMPLETED, SKIPPED
    }

    public enum WorkoutStatus {
        COMPLETED, PARTIALLY_COMPLETED, SKIPPED
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public MealStatus getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(MealStatus breakfast) {
        this.breakfast = breakfast;
    }

    public MealStatus getLunch() {
        return lunch;
    }

    public void setLunch(MealStatus lunch) {
        this.lunch = lunch;
    }

    public MealStatus getDinner() {
        return dinner;
    }

    public void setDinner(MealStatus dinner) {
        this.dinner = dinner;
    }

    public MealStatus getSnacks() {
        return snacks;
    }

    public void setSnacks(MealStatus snacks) {
        this.snacks = snacks;
    }

    public WorkoutStatus getWorkout() {
        return workout;
    }

    public void setWorkout(WorkoutStatus workout) {
        this.workout = workout;
    }

    public double getSleepHours() {
        return sleepHours;
    }

    public void setSleepHours(double sleepHours) {
        this.sleepHours = sleepHours;
    }

    public int getMood() {
        return mood;
    }

    public void setMood(int mood) {
        this.mood = mood;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}