package com.codeclan.example.Jurassic_Park.projections;

import com.codeclan.example.Jurassic_Park.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

@Projection(name="embedDinosaur", types = Paddock.class)
public interface EmbedDinosaur {

    Long getId();
    String getName();
    int getDinoCapacity();
    int getCostToBuy();
    int getUpKeepCost();
    boolean isOwned();
}
