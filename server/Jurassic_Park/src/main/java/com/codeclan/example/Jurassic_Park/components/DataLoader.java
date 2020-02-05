package com.codeclan.example.Jurassic_Park.components;

import com.codeclan.example.Jurassic_Park.models.*;
import com.codeclan.example.Jurassic_Park.repositories.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
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

        Paddock paddock = new Paddock("Malcolm Paddock", 1, 3, 6, 6, true, false, game1);
        paddockRepository.save(paddock);
        Paddock paddock2 = new Paddock("Grant Paddock", 2, 3, 6, 6, false, false, game1);
        paddockRepository.save(paddock2);
        Paddock paddock3 = new Paddock("Nedry Paddock", 3, 2, 4, 4, false, false, game1);
        paddockRepository.save(paddock3);
        Paddock paddock4 = new Paddock("Sattler Paddock", 4, 4, 8, 8, false, false, game1);
        paddockRepository.save(paddock4);
        Paddock paddock5 = new Paddock("Hammond Paddock", 5, 5, 10, 10, false, false, game1);
        paddockRepository.save(paddock5);
        Paddock paddock6 = new Paddock("Murphy Paddock", 6, 5, 10, 10, false, false, game1);
        paddockRepository.save(paddock6);
        Paddock paddock7 = new Paddock("Dodgson Paddock", 7, 3, 6, 6, true, false, game1);
        paddockRepository.save(paddock7);
        Paddock paddock8 = new Paddock("Wu Paddock", 8, 2, 4, 4, false, false, game1);
        paddockRepository.save(paddock8);
        Paddock paddock9 = new Paddock("Gennaro Paddock", 9, 4, 8, 8, true, false, game1);
        paddockRepository.save(paddock9);
        Paddock paddock10 = new Paddock("Muldoon Paddock", 10, 2, 4, 4, false, false, game1);
        paddockRepository.save(paddock10);


        Dinosaur tRex = new Dinosaur("T-Rex",10, 10, "Carnivore", 10, paddock7);
        dinosaurRepository.save(tRex);
        Dinosaur tRex2 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock);
        dinosaurRepository.save(tRex2);
        Dinosaur dino3 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock);
        dinosaurRepository.save(dino3);

        Dinosaur dino4 = new Dinosaur("T-Rex",10, 10, "Carnivore", 10, paddock7);
        dinosaurRepository.save(dino4);
        Dinosaur dino5 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock9);
        dinosaurRepository.save(dino5);

        Dinosaur dino7 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock9);
        dinosaurRepository.save(dino7);



        Food food1 = new Food("Beef", 4, 6, "Carnivore");
        Food food2 = new Food("Chicken", 2, 3, "Carnivore");
        Food food3 = new Food("Shrubbery", 4, 6, "Herbivore");
        Food food4 = new Food("Berries", 2, 3, "Herbivore");
        foodRepository.save(food1);
        foodRepository.save(food2);
        foodRepository.save(food3);
        foodRepository.save(food4);

    }

}
