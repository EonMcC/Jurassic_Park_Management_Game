package com.codeclan.example.Jurassic_Park.repositories.inheritance;

import com.codeclan.example.Jurassic_Park.models.inheritance.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {

}
