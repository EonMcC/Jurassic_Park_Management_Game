package com.codeclan.example.Jurassic_Park.Game;

import com.codeclan.example.Jurassic_Park.models.Bank;
import com.codeclan.example.Jurassic_Park.models.Game;
import com.codeclan.example.Jurassic_Park.Types.FoodType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GameTest {

    Game game;
    Bank bank;

    @Before
    public void setup(){
        game = new Game();
        bank = new Bank(1000);
    }

    @Test
    public void canGetBankBalance(){
        int amount = game.getBank().getBalance();
        assertEquals(1000, amount);
    }

    @Test
    public void canCalculateGameIsOver(){
        game.getBank().setBalance(-1000);
        assertEquals("Game Over", game.calculateResult());
    }

    @Test
    public void canCalculateIfGameIsStillOn(){
       assertEquals("Game On", game.calculateResult());
    }
//
//    @Test
//    public void canFeedDino(){
//        game.feedDino(dinosaur, FoodType.COW);
//        assertEquals(10, game.getPaddock(paddock).getDino(dinosaur).getHungerLevel());
//    }

//    @Test
//    public void paddockListStartsEmpty(){
//        assertEquals(0, game.getPaddocks().size());
//    }
//
//    @Test
//    public void canAddAPaddockToAGame(){
//        game.buyPaddock(paddock);
//        assertEquals(1, game.getPaddocks().size());
//    }


}
