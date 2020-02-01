package com.codeclan.example.Jurassic_Park.models.inheritance;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "weerexes")
public class WeeRex extends Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("weeRexes")
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = false)
    private Paddock paddock;

    public WeeRex(int foodLevel, int buyValue, String dietaryType, int revenueIncrease, Paddock paddock) {
        super(foodLevel, buyValue, dietaryType, revenueIncrease);
        this.paddock = paddock;
    }

    public WeeRex() {
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
