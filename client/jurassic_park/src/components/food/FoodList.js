import React, { Component } from 'react';
import Food from './Food';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {

    const splitFoods = this.props.foods.map((food, index) => {
      return (
        <Food
          key={index}
          food={food}
          onHandleSelectFood={this.props.onHandleSelectFood}
          bankBalance={this.props.bankBalance}
          selectedDino={this.props.selectedDino}
          // dinoFull={this.props.dinoFull}
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
