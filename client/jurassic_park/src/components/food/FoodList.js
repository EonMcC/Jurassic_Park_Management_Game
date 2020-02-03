import React, { Component } from 'react';
import Food from './Food';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 

    const splitFoods = this.props.foods.map(food => {
      return (
        <Food 
          key={food.id} 
          food={food}
          onHandleSelectFood={this.props.onHandleSelectFood} 
          bankBalance={this.props.bankBalance}
          />
      );
    });

    return ( 
      <div className="food-list">
        {splitFoods}
      </div>
     );
  }
}
 
export default FoodList;