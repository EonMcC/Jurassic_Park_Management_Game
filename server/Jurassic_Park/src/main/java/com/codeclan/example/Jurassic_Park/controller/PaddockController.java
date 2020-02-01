package com.codeclan.example.Jurassic_Park.controller;

import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orange")
public class PaddockController {

    @Autowired
    PaddockRepository paddockRepository;
}