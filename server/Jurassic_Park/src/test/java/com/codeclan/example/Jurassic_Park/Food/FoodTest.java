package com.codeclan.example.Jurassic_Park.Food;

import com.codeclan.example.Jurassic_Park.Models.Food;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FoodTest {

    Food food;

    @Before
    public void setup(){
        food = new Food("Cow", 2, 2, 'm');

    }

    @Test
    public void canGetName(){
        assertEquals("Cow", food.getName());
    }

    @Test
    public void canGetValue(){
        assertEquals(2, food.getValue());
    }
}
