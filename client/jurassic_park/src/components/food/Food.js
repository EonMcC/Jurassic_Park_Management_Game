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
    const foodCost = this.props.food.cost;
    const bankBalance = this.props.bankBalance;
    if (foodCost <= bankBalance) {
      return true;
    } else {
      return false;
    }
  }

  render() { 

    return ( 
      <div className="food-item">
        <h4>Food: {this.props.food.name}</h4>
        <h4>Replenishment: {this.props.food.replen}</h4>
        <h4>Cost: €{this.props.food.cost}</h4>
        {this.checkCanAffordFood() && <button onClick={this.handleSelect}>Feed to Dino</button>}
      </div>
     );
  }
}
 
export default Food;