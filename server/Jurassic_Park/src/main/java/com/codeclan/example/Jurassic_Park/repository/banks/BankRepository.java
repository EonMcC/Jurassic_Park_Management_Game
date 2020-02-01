package com.codeclan.example.Jurassic_Park.repository.banks;


import com.codeclan.example.Jurassic_Park.Models.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BankRepository extends JpaRepository<Bank, Long> {
}
