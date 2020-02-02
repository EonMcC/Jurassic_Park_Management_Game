package com.codeclan.example.Jurassic_Park.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "trexes")
public class TRex {

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

    @JsonIgnoreProperties("trexes")
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = false)
    private Paddock paddock;

    public TRex(int foodLevel, int buyValue, String dietaryType, int revenueIncrease, Paddock paddock) {
        this.foodLevel = foodLevel;
        this.buyValue = buyValue;
        this.dietaryType = dietaryType;
        this.revenueIncrease = revenueIncrease;
        this.paddock = paddock;
    }

    public TRex() {
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

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }
}