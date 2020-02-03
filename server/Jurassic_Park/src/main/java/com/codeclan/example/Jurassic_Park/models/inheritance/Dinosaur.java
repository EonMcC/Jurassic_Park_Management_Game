package com.codeclan.example.Jurassic_Park.models.inheritance;

import javax.persistence.*;

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

    public Dinosaur(int foodLevel, int buyValue, String dietaryType, int revenueIncrease) {
        this.foodLevel = foodLevel;
        this.buyValue = buyValue;
        this.dietaryType = dietaryType;
        this.revenueIncrease = revenueIncrease;
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

    public void setDietaryType(String food) {
        this.dietaryType = food;
    }

    public int getRevenueIncrease() {
        return revenueIncrease;
    }

    public void setRevenueIncrease(int revenueIncrease) {
        this.revenueIncrease = revenueIncrease;
    }

}
