package com.codeclan.example.Jurassic_Park.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @JsonIgnoreProperties("game")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "game", fetch = FetchType.LAZY)
    private List<Paddock> paddocks;

    public Game(Bank bank){
        this.bank = bank;
        this.paddocks = new ArrayList<Paddock>();
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

    public List<Paddock> getPaddocks() {
        return paddocks;
    }

    public void setPaddocks(ArrayList<Paddock> paddocks) {
        this.paddocks = paddocks;
    }


    public void buyPaddock(Paddock paddock){
        this.paddocks.add(paddock);
    }
}
