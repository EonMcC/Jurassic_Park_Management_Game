package com.codeclan.example.Jurassic_Park.repositories.inheritance;

import com.codeclan.example.Jurassic_Park.models.inheritance.WeeRex;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface WeeRexRepository extends JpaRepository<WeeRex, Long> {

}
