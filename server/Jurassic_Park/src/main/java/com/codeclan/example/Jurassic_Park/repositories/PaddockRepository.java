package com.codeclan.example.Jurassic_Park.repositories;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaddockRepository extends JpaRepository<Paddock, Long> {

//    List<Paddock> findPaddocksByTRexId(Long Id);

}
