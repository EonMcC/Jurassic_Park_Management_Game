package com.codeclan.example.Jurassic_Park.repository.games;

import com.codeclan.example.Jurassic_Park.models.Bank;
import com.codeclan.example.Jurassic_Park.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface GameRepository extends JpaRepository<Game, Long>, GameRepositoryCustom{

    Bank findBankById(Long id);

}
