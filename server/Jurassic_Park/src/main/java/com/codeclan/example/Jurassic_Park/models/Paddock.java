package com.codeclan.example.Jurassic_Park.models;

import com.codeclan.example.Jurassic_Park.models.inheritance.TriceratopsInherit;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paddocks")

public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int dinoCapacity;

    private int noOfDinos;

    private int costToBuy;

    private int upKeepCost;

    private boolean owned;

    @JsonIgnoreProperties("paddock")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<TRex> trexes;

    @JsonIgnoreProperties("paddock")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Triceratops> triceratops;

    @JsonIgnoreProperties("paddocks")
    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;


    public Paddock(int dinoCapacity, int noOfDinos, int costToBuy, int upKeepCost, boolean owned, Game game) {
        this.dinoCapacity = dinoCapacity;
        this.noOfDinos = noOfDinos;
        this.costToBuy = costToBuy;
        this.upKeepCost = upKeepCost;
        this.owned = owned;
        this.trexes = new ArrayList<>();
        this.triceratops = new ArrayList<>();
        this.game = game;
    }

    public Paddock () {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDinoCapacity() {
        return dinoCapacity;
    }

    public void setDinoCapacity(int dinoCapacity) {
        this.dinoCapacity = dinoCapacity;
    }

    public int getNoOfDinos() {
        return noOfDinos;
    }

    public void setNoOfDinos(int noOfDinos) {
        this.noOfDinos = noOfDinos;
    }

    public int getCostToBuy() {
        return costToBuy;
    }

    public void setCostToBuy(int costToBuy) {
        this.costToBuy = costToBuy;
    }

    public int getUpKeepCost() {
        return upKeepCost;
    }

    public void setUpKeepCost(int upKeepCost) {
        this.upKeepCost = upKeepCost;
    }

    public boolean isOwned() {
        return owned;
    }

    public void setOwned(boolean owned) {
        this.owned = owned;
    }

    public List<TRex> getTRexes() {
        return this.trexes;
    }

    public void setTRexes(List<TRex> trexes) {
        this.trexes = trexes;
    }

    public List<Triceratops> getTriceratops() { return this.triceratops; }

    public void setTriceratops(List<Triceratops> triceratops) { this.triceratops = triceratops; }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
