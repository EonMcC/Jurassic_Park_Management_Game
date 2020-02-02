package com.codeclan.example.Jurassic_Park.projections;

import com.codeclan.example.Jurassic_Park.Models.Bank;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedGame", types = Bank.class)
public interface EmbedGame {

    long getId();
    int getBalance();
}
