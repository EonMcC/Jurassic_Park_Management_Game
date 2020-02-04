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

    @Column(name="name")
    private String name;

    @Column(name="dino_capacity")
    private int dinoCapacity;

    @Column(name="cost")
    private int costToBuy;

    @Column(name="upkeep")
    private int upKeepCost;

    @Column(name="owned")
    private boolean owned;

    @JsonIgnoreProperties("paddock")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

//    @JsonIgnoreProperties("paddock")
//    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
//    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
//    private List<Triceratops> triceratops;

    @JsonIgnoreProperties("paddocks")
    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @Column(name="action_required")
    private boolean actionRequired;


    public Paddock(String name, int dinoCapacity, int costToBuy, int upKeepCost, boolean owned, Game game, boolean actionRequired) {
        this.name = name;
        this.dinoCapacity = dinoCapacity;
        this.costToBuy = costToBuy;
        this.upKeepCost = upKeepCost;
        this.owned = owned;
        this.dinosaurs = new ArrayList<>();
//        this.triceratops = new ArrayList<>();
        this.game = game;
        this.actionRequired = actionRequired;
    }

    public Paddock () {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<Dinosaur> getDinosaurs() {
        return this.dinosaurs;
    }

    public void setDinosaurs(List<Dinosaur> trexes) {
        this.dinosaurs = trexes;
    }

//    public List<Triceratops> getTriceratops() { return this.triceratops; }
//
//    public void setTriceratops(List<Triceratops> triceratops) { this.triceratops = triceratops; }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public boolean isActionRequired() {
        return actionRequired;
    }

    public void setActionRequired(boolean actionRequired) {
        this.actionRequired = actionRequired;
    }
}


