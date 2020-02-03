package com.codeclan.example.Jurassic_Park.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name= "banks")
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="balance")
    private int balance;

    @JsonIgnoreProperties("banks")
    @OneToOne(mappedBy = "bank")
    private Game game;


    public Bank(int balance) {
        this.balance = balance;

    }

    public Bank(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getBalance(){
        return this.balance;
    }

    public void setBalance(int amount){
        this.balance += amount;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;

    }
}
