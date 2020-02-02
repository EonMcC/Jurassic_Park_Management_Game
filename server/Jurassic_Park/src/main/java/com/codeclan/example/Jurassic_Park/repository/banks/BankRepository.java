package com.codeclan.example.Jurassic_Park.repository.banks;


import com.codeclan.example.Jurassic_Park.Models.Bank;
import com.codeclan.example.Jurassic_Park.projections.EmbedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedGame.class)
public interface BankRepository extends JpaRepository<Bank, Long> {
}
