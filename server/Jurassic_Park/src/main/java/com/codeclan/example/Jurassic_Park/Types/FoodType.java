package com.codeclan.example.Jurassic_Park.Types;

public enum FoodType {

    COW(10, 2, 'c' ),
    CHICKEN(5, 1, 'c'),
    SHRUBBERY(10, 2, 'h'),
    BERRIES(5, 1, 'h');



    private int value;
    private int replenLevel;
    private char type;

    FoodType(int value, int replenlevel, char type){
        this.value = value;
        this.replenLevel = replenLevel;
        this.type = type;
    }

    public int getValue(){
        return this.value;
    }

    public int getReplenLevel(){
        return this.replenLevel;
    }

    public int getType(){
        return this.getType();
    }
}
