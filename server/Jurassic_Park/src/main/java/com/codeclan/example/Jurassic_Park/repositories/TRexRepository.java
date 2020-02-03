package com.codeclan.example.Jurassic_Park.repositories;

import com.codeclan.example.Jurassic_Park.models.TRex;
import com.codeclan.example.Jurassic_Park.models.inheritance.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TRexRepository extends JpaRepository<TRex, Long> {
}


