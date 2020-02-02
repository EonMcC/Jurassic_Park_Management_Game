package com.codeclan.example.Jurassic_Park.controller;

import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping(value = "/balance")
    public int getBankBalance(){
        return gameRepository.getBankBalance();
    }


}
