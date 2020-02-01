package com.codeclan.example.Jurassic_Park.Bank;
import com.codeclan.example.Jurassic_Park.Models.Bank;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class BankTest {

    Bank bank;

    @Before
    public void setup(){
        bank = new Bank(1500);
    }

    @Test
    public void canGetBalance(){
        assertEquals(1500, bank.getBalance());
    }

}
