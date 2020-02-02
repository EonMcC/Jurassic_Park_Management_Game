package com.codeclan.example.Jurassic_Park.Bank;
import com.codeclan.example.Jurassic_Park.Models.Bank;
import com.codeclan.example.Jurassic_Park.Models.Game;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class BankTest {

    Bank bank;
    Game game;

    @Before
    public void setup(){
        game = new Game();
        bank = new Bank(1500);
    }

    @Test
    public void canGetBalance(){
        assertEquals(1500, bank.getBalance());
    }

    @Test
    public void canAddToBalance(){
        bank.setBalance(200);
        assertEquals(1700, bank.getBalance());
    }

    @Test
    public void canSubtractFromBalance(){
        bank.setBalance(-200);
        assertEquals(1300, bank.getBalance());
    }

}
