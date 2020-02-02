package com.codeclan.example.Jurassic_Park.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("games")
    @OneToOne()
    @JoinColumn(name = "bank_id", nullable =  false)
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    //    public ArrayList<Paddock> getPaddocks(){
//        return new ArrayList<Paddock>(this.paddocks);
//    }
//
//    public void buyPaddock(Paddock paddock){
//        this.paddocks.add(paddock);
//    }
}
