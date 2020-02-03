package com.codeclan.example.Jurassic_Park;


import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.TRex;
import com.codeclan.example.Jurassic_Park.models.Triceratops;
import com.codeclan.example.Jurassic_Park.models.inheritance.TriceratopsInherit;
import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
//import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
import com.codeclan.example.Jurassic_Park.repositories.TriceratopsRepository;
import com.codeclan.example.Jurassic_Park.repositories.inheritance.TriceratopsInheritRepository;

import com.codeclan.example.Jurassic_Park.models.Bank;
import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class JurassicParkApplicationTests {

	@Autowired

	PaddockRepository paddockRepository;

	@Autowired
	TRexRepository tRexRepository;

	@Autowired
    TriceratopsRepository triceratopsRepository;

	@Autowired
    TriceratopsInheritRepository triceratopsInheritRepository;

	@Autowired
	GameRepository gameRepository;


	@Test
	void contextLoads() {
	}

	@Test

	public void canCreatePaddock() {
		Paddock paddock = new Paddock(5, 0, 3000, 30, false);
		paddockRepository.save(paddock);
	}

	@Test
	public void canCreateTRexAndPaddock() {
		Paddock paddock = new Paddock(5, 0, 3000, 30, false);
		paddockRepository.save(paddock);
		TRex tRex = new TRex(10, 30, "Cow", 3, paddock);
		tRexRepository.save(tRex);
	}

	@Test
    public void canCreateTriceratopsAndPaddock() {
        Paddock paddock = new Paddock(5, 0, 3000, 30, false);
        paddockRepository.save(paddock);
        Triceratops triceratops = new Triceratops(10, 30, "Shrubbery", 3, paddock);
        triceratopsRepository.save(triceratops);
    }

	@Test
	public void canCreateTriceratopsAndPaddockWithDinosaurAbstract() {
		Paddock paddock = new Paddock(5, 0, 3000, 30, false);
		paddockRepository.save(paddock);
		TriceratopsInherit triceratops = new TriceratopsInherit(10, 30, "Shrubbery", 3, paddock);
		triceratopsInheritRepository.save(triceratops);
	}

	@Test
	public void findBankById(){
		int result = gameRepository.getBankBalance();
		assertEquals(1000, result);
	}

	@Test
	public void testingDataLoader() {

	}


}
