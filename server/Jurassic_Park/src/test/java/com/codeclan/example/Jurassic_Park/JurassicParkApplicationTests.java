package com.codeclan.example.Jurassic_Park;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import com.codeclan.example.Jurassic_Park.models.TRex;
import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
import com.codeclan.example.Jurassic_Park.repositories.inheritance.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
//import com.codeclan.example.Jurassic_Park.repositories.TRexRepository;
import com.codeclan.example.Jurassic_Park.repositories.inheritance.WeeRexRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class JurassicParkApplicationTests {

	@Autowired
	PaddockRepository paddockRepository;

	@Autowired
	TRexRepository tRexRepository;

//	@Autowired
//	DinosaurRepository dinosaurRepository;

//	@Autowired
//	WeeRexRepository weeRexRepository;

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

//	@Test
//	public void canCreateWeeRexAndPaddock() {
//		Paddock paddock = new Paddock(5, 0, 3000, 30, false);
//		paddockRepository.save(paddock);
//		WeeRex weeRex = new WeeRex(10, 30, "Cow", 3, paddock);
//		weeRexRepository.save(weeRex);
//	}

	@Test
	public void testingDataLoader() {

	}


}
