package com.codeclan.example.Jurassic_Park.models.inheritance;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.inheritance.Dinosaur;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "triceratops")
public class TriceratopsInherit extends Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("weeRexes")
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = false)
    private Paddock paddock;

    public TriceratopsInherit(int foodLevel, int buyValue, String foodType, int revenueIncrease, Paddock paddock) {
        super(foodLevel, buyValue, foodType, revenueIncrease);
        this.paddock = paddock;
    }

    public TriceratopsInherit() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }
}
