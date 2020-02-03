package com.codeclan.example.Jurassic_Park.projections;

import com.codeclan.example.Jurassic_Park.models.Bank;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedGame", types = Bank.class)
public interface EmbedGame {

    long getId();
    int getBalance();
}
