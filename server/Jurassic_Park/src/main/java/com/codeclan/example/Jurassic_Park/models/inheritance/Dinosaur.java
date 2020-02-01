package com.codeclan.example.Jurassic_Park.models.inheritance;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

//@Entity
//@Table(name = "trexes")
@Entity
@Inheritance
public abstract class Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "food_level")
    private int foodLevel;

    @Column(name = "buy_value")
    private int buyValue;

    @Column(name = "dietary_type")
    private String dietaryType;

    @Column(name = "revenue_increase")
    private int revenueIncrease;

//    @JsonIgnoreProperties("weeRexes")
//    @ManyToOne
//    @JoinColumn(name = "paddock_id", nullable = false)
//    private Paddock paddock;

//    , Paddock paddock
    public Dinosaur(int foodLevel, int buyValue, String dietaryType, int revenueIncrease) {
        this.foodLevel = foodLevel;
        this.buyValue = buyValue;
        this.dietaryType = dietaryType;
        this.revenueIncrease = revenueIncrease;
//        this.paddock = paddock;
    }

    public Dinosaur() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getFoodLevel() {
        return foodLevel;
    }

    public void setFoodLevel(int foodLevel) {
        this.foodLevel = foodLevel;
    }

    public int getBuyValue() {
        return buyValue;
    }

    public void setBuyValue(int buyValue) {
        this.buyValue = buyValue;
    }

    public String getDietaryType() {
        return dietaryType;
    }

    public void setDietaryType(String dietaryType) {
        this.dietaryType = dietaryType;
    }

    public int getRevenueIncrease() {
        return revenueIncrease;
    }

    public void setRevenueIncrease(int revenueIncrease) {
        this.revenueIncrease = revenueIncrease;
    }

//    public Paddock getPaddock() {
//        return paddock;
//    }
//
//    public void setPaddock(Paddock paddock) {
//        this.paddock = paddock;
//    }
}
