package com.codeclan.example.Jurassic_Park.repositories;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.Dinosaur;
import com.codeclan.example.Jurassic_Park.projections.EmbedDinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedDinosaur.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long> {

//    List<Paddock> findPaddocksByTRexId(Long Id);

}
