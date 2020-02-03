package com.codeclan.example.Jurassic_Park.components;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.TRex;
import com.codeclan.example.Jurassic_Park.models.Triceratops;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
import com.codeclan.example.Jurassic_Park.repositories.TriceratopsRepository;
import com.codeclan.example.Jurassic_Park.repositories.inheritance.TriceratopsInheritRepository;


import com.codeclan.example.Jurassic_Park.models.Bank;
import com.codeclan.example.Jurassic_Park.models.Game;
import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TRexRepository tRexRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    TriceratopsRepository triceratopsRepository;

    @Autowired
    TriceratopsInheritRepository triceratopsInheritRepository;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    GameRepository gameRepository;


    public DataLoader() {

    }


    public void run(ApplicationArguments args) {
        Paddock paddock = new Paddock(1, 2, 3, 4, false);
        paddockRepository.save(paddock);

        TRex tRex = new TRex(4, 5, "cow", 5, paddock);
        tRexRepository.save(tRex);
        TRex tRex2 = new TRex(10, 5, "cow", 5, paddock);
        tRexRepository.save(tRex2);

        Triceratops triceratops = new Triceratops(4, 5, "shrubbery", 5, paddock);
        triceratopsRepository.save(triceratops);

//      TriceratopsInherit triceratops = new TriceratopsInherit(10, 30, "Shrubbery", 3, paddock);
//      triceratopsInheritRepository.save(triceratops);

        Bank bank1 = new Bank(1000);
        bankRepository.save(bank1);

        Game game1 = new Game(bank1);
        gameRepository.save(game1);

    }

}
