package com.codeclan.example.Jurassic_Park.components;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.TRex;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
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

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Paddock paddock = new Paddock(1, 2, 3, 4, false);
        paddockRepository.save(paddock);
        TRex tRex = new TRex(4, 5, "cow", 5, paddock);
        tRexRepository.save(tRex);
        TRex tRex2 = new TRex(10, 5, "cow", 5, paddock);
        tRexRepository.save(tRex2);
    }


}
