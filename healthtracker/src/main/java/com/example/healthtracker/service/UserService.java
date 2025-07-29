package com.example.healthtracker.service;

import com.example.healthtracker.dto.UserDto;
import com.example.healthtracker.exception.CustomException;
import com.example.healthtracker.model.User;
import com.example.healthtracker.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(UserDto userDto) {
        if (userRepository.existsByUserId(userDto.getUserId())) {
            throw new CustomException("Username is already taken");
        }

        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());

        return userRepository.save(user);
    }

    public UserDto getCurrentUser(String userId) {
        User user = userRepository.findByUserId(userId)
                .orElseThrow(() -> new CustomException("User not found"));

        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());

        return userDto;
    }
}