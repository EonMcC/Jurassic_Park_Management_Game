package com.codeclan.example.Jurassic_Park.repositories;


import com.codeclan.example.Jurassic_Park.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}


