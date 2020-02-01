package Types;

import com.codeclan.example.Jurassic_Park.Types.FoodType;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FoodTypeTest {

    @Test
    public void canGetFoodValue(){
        assertEquals(10, FoodType.COW.getValue());
    }

    @Test
    public void canGetFoodReplenishValue(){
        assertEquals(2, FoodType.COW.getReplenLevel());
    }

    @Test
    public void canGetFoodDietaryType(){
        assertEquals('c', FoodType.COW.getType());
    }
}
