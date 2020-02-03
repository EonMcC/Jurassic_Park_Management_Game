package com.codeclan.example.Jurassic_Park.repositories;

import com.codeclan.example.Jurassic_Park.models.Triceratops;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TriceratopsRepository extends JpaRepository<Triceratops, Long> {
}
