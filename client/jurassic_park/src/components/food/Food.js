import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSelect = this.handleSelect.bind(this);
    this.checkCanAffordFood = this.checkCanAffordFood.bind(this);
  }

  handleSelect(e) {
    this.props.onHandleSelectFood(this.props.food);
  }

  checkCanAffordFood(){
    const foodPrice = this.props.food.price;
    const bankBalance = this.props.bankBalance;
    if (foodPrice <= bankBalance) {
      return true;
    } else {
      return false;
    }
  }

  render() { 

    return ( 
      <div className="food-item">
        <h4>Food: {this.props.food.name}</h4>
        <h4>Replenishment: {this.props.food.replenLevel}</h4>
        <h4>Cost: €{this.props.food.price}</h4>
        {this.checkCanAffordFood() && <button onClick={this.handleSelect}>Feed to Dino</button>}
      </div>
     );
  }
}
 
export default Food;