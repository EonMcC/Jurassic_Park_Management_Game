package com.codeclan.example.Jurassic_Park.repositories.inheritance;

import com.codeclan.example.Jurassic_Park.models.inheritance.Dino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
//@Repository
public interface DinoRepository extends JpaRepository<Dino, Long> {

}
