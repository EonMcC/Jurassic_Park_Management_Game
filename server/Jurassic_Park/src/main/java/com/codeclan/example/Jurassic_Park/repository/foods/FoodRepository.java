package com.codeclan.example.Jurassic_Park.repository.foods;

import com.codeclan.example.Jurassic_Park.Models.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface FoodRepository extends JpaRepository<Food, Long> {
}
