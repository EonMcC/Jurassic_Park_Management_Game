package com.codeclan.example.Jurassic_Park.components;

import com.codeclan.example.Jurassic_Park.controller.DinosaurController;
import com.codeclan.example.Jurassic_Park.models.*;
import com.codeclan.example.Jurassic_Park.models.inheritance.Dino;
import com.codeclan.example.Jurassic_Park.repositories.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import com.codeclan.example.Jurassic_Park.repositories.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.TriceratopsRepository;
import com.codeclan.example.Jurassic_Park.repositories.inheritance.TriceratopsInheritRepository;


import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
import com.codeclan.example.Jurassic_Park.repository.foods.FoodRepository;
import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    TriceratopsRepository triceratopsRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    GameRepository gameRepository;


    public DataLoader() {

    }


    public void run(ApplicationArguments args) {

        Bank bank1 = new Bank(1000);
        bankRepository.save(bank1);

        Game game1 = new Game(bank1);
        gameRepository.save(game1);

        Paddock paddock = new Paddock("West Paddock", 1, 3, 4, true, game1, false);
        paddockRepository.save(paddock);
        Paddock paddock2 = new Paddock("East Paddock", 2, 6, 8, true, game1, false);
        paddockRepository.save(paddock2);

        Dinosaur tRex = new Dinosaur("T-Rex",4, 5, "Carnivore", 5, paddock);
        dinosaurRepository.save(tRex);
        Dinosaur tRex2 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock);
        dinosaurRepository.save(tRex2);
        Dinosaur dino3 = new Dinosaur("Triceratops", 8, 4, "Herbivore", 5, paddock);
        dinosaurRepository.save(dino3);

        Food food1 = new Food("Beef", 10, 2, "Carnivore");
        Food food2 = new Food("Chicken", 5, 1, "Carnivore");
        Food food3 = new Food("Shrubbery", 10, 2, "Herbivore");
        Food food4 = new Food("Berries", 5, 1, "Herbivore");
        foodRepository.save(food1);
        foodRepository.save(food2);
        foodRepository.save(food3);
        foodRepository.save(food4);

//        Triceratops triceratops = new Triceratops(4, 5, "herbivore", 5, paddock);
//        triceratopsRepository.save(triceratops);

//      TriceratopsInherit triceratops = new TriceratopsInherit(10, 30, "Shrubbery", 3, paddock);
//      triceratopsInheritRepository.save(triceratops);


    }

}
