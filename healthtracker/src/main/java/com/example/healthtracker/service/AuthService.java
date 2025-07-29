package com.example.healthtracker.service;

import com.example.healthtracker.dto.AuthRequest;
import com.example.healthtracker.dto.AuthResponse;
import com.example.healthtracker.exception.CustomException;
import com.example.healthtracker.model.User;
import com.example.healthtracker.repository.UserRepository;
import com.example.healthtracker.security.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder,
                       AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    public AuthResponse login(AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserId(), authRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = (User) authentication.getPrincipal();
            String token = jwtUtil.generateToken(user.getUserId());

            AuthResponse response = new AuthResponse();
            response.setToken(token);
            response.setUserId(user.getUserId());
            response.setName(user.getName());

            return response;
        } catch (Exception e) {
            throw new CustomException("Invalid username or password");
        }
    }
}