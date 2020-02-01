package com.codeclan.example.Jurassic_Park.components;


import com.codeclan.example.Jurassic_Park.Models.Bank;
import com.codeclan.example.Jurassic_Park.Models.Game;
import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
//import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BankRepository bankRepository;

//    @Autowired
//    GameRepository gameRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        Bank bank1 = new Bank(1000);
        bankRepository.save(bank1);

//        Game game1 = new Game(bank1);
//        gameRepository.save(game1);


    }
}
