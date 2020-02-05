package com.codeclan.example.Jurassic_Park;


import com.codeclan.example.Jurassic_Park.models.*;
import com.codeclan.example.Jurassic_Park.repositories.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.Assert.assertEquals;

@SpringBootTest
class JurassicParkApplicationTests {

	@Autowired

	PaddockRepository paddockRepository;

	@Autowired
	DinosaurRepository dinosaurRepository;

	@Autowired
	GameRepository gameRepository;

	@Autowired
	BankRepository bankRepository;

	@Test
	void contextLoads() {

	}

	@Test

	public void canCreatePaddock() {
		Bank bank1 = new Bank(1000);
		bankRepository.save(bank1);
		Game game1 = new Game(bank1);
		gameRepository.save(game1);
		Paddock paddock = new Paddock("West Paddock", 1,  0, 3000, 30, false, false, game1);
		paddockRepository.save(paddock);
	}

	@Test
	public void canCreateTRexAndPaddock() {
		Bank bank1 = new Bank(1000);
		bankRepository.save(bank1);
		Game game1 = new Game(bank1);
		gameRepository.save(game1);
		Paddock paddock = new Paddock("West Paddock", 1, 0, 3000, 30, false, false, game1);
		paddockRepository.save(paddock);
		Dinosaur tRex = new Dinosaur("T-Rex",10, 30, "Cow", 3, paddock);
		dinosaurRepository.save(tRex);
	}

	@Test
    public void canCreateTriceratopsAndPaddock() {
		Bank bank1 = new Bank(1000);
		bankRepository.save(bank1);
		Game game1 = new Game(bank1);
		gameRepository.save(game1);
        Paddock paddock = new Paddock("West Paddock", 1, 0, 3000, 30, false, false, game1);
        paddockRepository.save(paddock);
    }

	@Test
	public void canCreateTriceratopsAndPaddockWithDinosaurAbstract() {
		Bank bank1 = new Bank(1000);
		bankRepository.save(bank1);
		Game game1 = new Game(bank1);
		gameRepository.save(game1);
		Paddock paddock = new Paddock("West Paddock", 1, 0, 3000, 30, false, false, game1);
		paddockRepository.save(paddock);
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
