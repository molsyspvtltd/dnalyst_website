package com.example.healthtracker.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class CustomException extends RuntimeException {
    public CustomException(String message) {
        super(message);
    }
}

