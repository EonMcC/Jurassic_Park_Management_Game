package com.codeclan.example.Jurassic_Park.Models;

import javax.persistence.*;

@Entity
@Table(name= "com/codeclan/example/Jurassic_Park/repository")
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="balance")
    private int balance;

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
}
