package com.codeclan.example.Jurassic_Park.repository.games;

import com.codeclan.example.Jurassic_Park.models.*;
import com.codeclan.example.Jurassic_Park.repositories.DinosaurRepository;
import com.codeclan.example.Jurassic_Park.repositories.PaddockRepository;
import com.codeclan.example.Jurassic_Park.repositories.TriceratopsRepository;
import com.codeclan.example.Jurassic_Park.repository.banks.BankRepository;
import com.codeclan.example.Jurassic_Park.repository.foods.FoodRepository;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class GameRepositoryImpl implements GameRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    TriceratopsRepository triceratopsRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    BankRepository bankRepository;

    @Autowired
    GameRepository gameRepository;

    @Transactional
    public int getBankBalance() {
        List<Game> games = null;
        int result = 0;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Game.class);
            games = cr.list();
            result = games.get(0).getBank().getBalance();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return result;
    }

    @Transactional
    public String resetGame(){

        dinosaurRepository.deleteAll();
        paddockRepository.deleteAll();
        gameRepository.deleteAll();
        bankRepository.deleteAll();
        foodRepository.deleteAll();

        Bank bank1 = new Bank(1000);
        bankRepository.save(bank1);

        Game game1 = new Game(bank1);
        gameRepository.save(game1);

        Paddock paddock = new Paddock("West Paddock", 1, 3, 4, true, false, game1);
        paddockRepository.save(paddock);
        Paddock paddock2 = new Paddock("East Paddock", 2, 6, 8, false, false, game1);
        paddockRepository.save(paddock2);

        Dinosaur tRex = new Dinosaur("T-Rex",4, 5, "Carnivore", 5, paddock);
        dinosaurRepository.save(tRex);
        Dinosaur tRex2 = new Dinosaur("Triceratops", 10, 5, "Herbivore", 5, paddock);
        dinosaurRepository.save(tRex2);
        Dinosaur dino3 = new Dinosaur("Triceratops", 8, 4, "Herbivore", 5, paddock);
        dinosaurRepository.save(dino3);

        Food food1 = new Food("Beef", 10, 2, "Carnivore");
        Food food2 = new Food("Chicken", 5, 1, "Carnivore");
        Food food3 = new Food("Shrubbery", 10, 2, "Herbivore");
        Food food4 = new Food("Berries", 5, 1, "Herbivore");
        foodRepository.save(food1);
        foodRepository.save(food2);
        foodRepository.save(food3);
        foodRepository.save(food4);

        return "true";
    }
}