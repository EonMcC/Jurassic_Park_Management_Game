package com.codeclan.example.Jurassic_Park.projections;

        import com.codeclan.example.Jurassic_Park.models.Dinosaur;
        import com.codeclan.example.Jurassic_Park.models.Game;
        import com.codeclan.example.Jurassic_Park.models.Paddock;
        import org.springframework.data.rest.core.config.Projection;

        import java.util.List;

@Projection(name="embedDinosaur", types = Paddock.class)
public interface EmbedDinosaur {

    Long getId();
    String getName();
    int getClassNumber();
    int getDinoCapacity();
    int getCostToBuy();
    int getUpKeepCost();
    boolean isOwned();
    boolean isActionRequired();
    List<Dinosaur> getDinosaurs();
    Game getGame();
}
