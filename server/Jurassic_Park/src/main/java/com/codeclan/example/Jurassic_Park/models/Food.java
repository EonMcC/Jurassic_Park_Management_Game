package com.codeclan.example.Jurassic_Park.models;

import javax.persistence.*;

@Entity
@Table(name="foods")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private int price;

    @Column(name="replen_level")
    private int replenLevel;

    @Column(name="type")
    private String type;

    public Food(String name, int price, int replenLevel, String type) {
        this.name = name;
        this.price = price;
        this.replenLevel = replenLevel;
        this.type = type;
    }

    public Food(){
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getReplenLevel() {
        return replenLevel;
    }

    public void setReplenLevel(int replenLevel) {
        this.replenLevel = replenLevel;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
