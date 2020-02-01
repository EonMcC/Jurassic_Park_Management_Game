package com.codeclan.example.Jurassic_Park.Models;

public class Game {

    private Bank bank;
//    private ArrayList<Paddock> paddocks;

    public Game(Bank bank){
        this.bank = bank;
//        this.paddocks = new ArrayList<Paddock>();
    }

    public Game() {
    }

    public Bank getBank(){
        return this.bank;
    }

    public void setBank(Bank bank){
        this.bank = bank;
    }

    public String calculateResult() {
        return this.bank.getBalance() > 0 ? "Game On": "Game Over";
    }

//    public ArrayList<Paddock> getPaddocks(){
//        return new ArrayList<Paddock>(this.paddocks);
//    }
//
//    public void addPaddock(Paddock paddock){
//        this.paddocks.add(paddock);
//    }
}
