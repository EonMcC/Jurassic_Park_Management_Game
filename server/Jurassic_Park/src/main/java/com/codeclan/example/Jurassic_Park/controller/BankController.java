package com.codeclan.example.Jurassic_Park.controller;

import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/banks")
public class BankController {

    @Autowired
    BankRepository bankRepository;
}
