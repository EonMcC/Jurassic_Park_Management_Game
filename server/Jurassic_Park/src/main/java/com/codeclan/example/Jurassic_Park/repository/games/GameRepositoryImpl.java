package com.codeclan.example.Jurassic_Park.repository.games;

import com.codeclan.example.Jurassic_Park.models.Bank;
import com.codeclan.example.Jurassic_Park.models.Game;
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
}