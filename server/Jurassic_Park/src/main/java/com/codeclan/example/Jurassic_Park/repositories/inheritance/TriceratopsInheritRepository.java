package com.codeclan.example.Jurassic_Park.repositories.inheritance;

import com.codeclan.example.Jurassic_Park.models.inheritance.TriceratopsInherit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Transactional
@Repository
public interface TriceratopsInheritRepository extends JpaRepository<TriceratopsInherit, Long> {

}
