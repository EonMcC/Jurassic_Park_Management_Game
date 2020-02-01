package com.codeclan.example.Jurassic_Park.Game;

import com.codeclan.example.Jurassic_Park.Models.Bank;
import com.codeclan.example.Jurassic_Park.Models.Game;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GameTest {

    Game game;
    Bank bank;

    @Before
    public void setup(){
        bank = new Bank(1000);
        game = new Game(bank);
    }

    @Test
    public void canGetBankBalance(){
        int amount = game.getBank().getBalance();
        assertEquals(1000, amount);
    }

//    @Test
//    public void paddockListStartsEmpty(){
//        assertEquals(0, game.getPaddocks().size());
//    }
//
//    @Test
//    public void canAddAPaddockToAGame(){
//        game.addPaddock(paddock);
//        assertEquals(1, game.getPaddocks().size());
//    }


}
