package com.codeclan.example.Jurassic_Park.controller;

import com.codeclan.example.Jurassic_Park.repository.foods.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/foods")
public class FoodController {

    @Autowired
    FoodRepository foodRepository;
}
