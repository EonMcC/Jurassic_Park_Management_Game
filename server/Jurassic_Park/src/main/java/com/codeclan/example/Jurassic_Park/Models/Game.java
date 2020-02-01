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

//    public ArrayList<Paddock> getPaddocks(){
//        return new ArrayList<Paddock>(this.paddocks);
//    }
//
//    public void addPaddock(Paddock paddock){
//        this.paddocks.add(paddock);
//    }
}
