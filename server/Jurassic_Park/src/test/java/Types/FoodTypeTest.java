package Types;

import com.codeclan.example.Jurassic_Park.Types.FoodType;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FoodTypeTest {

    @Test
    public void canGetFoodValue(){
        assertEquals(10, FoodType.COW.getValue());
    }
}
