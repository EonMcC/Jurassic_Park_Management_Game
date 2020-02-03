package com.codeclan.example.Jurassic_Park.repository.foods;

import com.codeclan.example.Jurassic_Park.models.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {
}
