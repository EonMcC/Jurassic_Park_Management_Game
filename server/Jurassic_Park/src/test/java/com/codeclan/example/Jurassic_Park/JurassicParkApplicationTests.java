package com.codeclan.example.Jurassic_Park;

import com.codeclan.example.Jurassic_Park.Models.Bank;
import com.codeclan.example.Jurassic_Park.repository.games.GameRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.Assert.assertEquals;

@SpringBootTest
class JurassicParkApplicationTests {

	@Autowired
	GameRepository gameRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void findBankById(){
		int result = gameRepository.getBankBalance();
		assertEquals(1000, result);
	}

}
