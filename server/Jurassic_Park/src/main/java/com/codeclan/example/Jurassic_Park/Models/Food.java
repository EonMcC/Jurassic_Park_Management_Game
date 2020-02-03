package com.codeclan.example.Jurassic_Park.Models;


import javax.persistence.*;

@Entity
@Table(name="foods")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="value")
    private int value;

    @Column(name="replenLevel")
    private int replenLevel;

    @Column(name="type")
    private char type;

    public Food(String name, int value, int replenLevel, char type){
        this.name = name;
        this.value = value;
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

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getReplenLevel() {
        return replenLevel;
    }

    public void setReplenLevel(int replenLevel) {
        this.replenLevel = replenLevel;
    }

    public char getType() {
        return type;
    }

    public void setType(char type) {
        this.type = type;
    }
}
