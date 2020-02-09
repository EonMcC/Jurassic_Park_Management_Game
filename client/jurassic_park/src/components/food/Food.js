import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSelect = this.handleSelect.bind(this);
    this.checkCanAffordFood = this.checkCanAffordFood.bind(this);
    this.checkRightTypeOfFood = this.checkRightTypeOfFood.bind(this);
    this.returnTrueIfDinoCanBeFed = this.returnTrueIfDinoCanBeFed.bind(this);
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

  checkRightTypeOfFood() {
    const dietaryType = this.props.selectedDino.dietaryType;
    const foodType = this.props.food.type;
    if (foodType === dietaryType) {
      return true;
    } else {
      return false;
    }
  }

  returnTrueIfDinoCanBeFed() {
    const maxValue = 20;
    if (this.props.selectedDino.foodLevel + this.props.food.replenLevel <= maxValue) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    return (
      <>
        {(this.checkRightTypeOfFood() && this.returnTrueIfDinoCanBeFed()) && <div className="food">
          <h4>{this.props.food.name}</h4>
          <h4>Replenishment: {this.props.food.replenLevel}</h4>
          <h4>Cost: €{this.props.food.price}</h4>
          {this.checkCanAffordFood() ? <button onClick={this.handleSelect}>Feed to Dino</button> : <h3>Can't Afford</h3>}
        </div>}
      </>
     );
  }
}

export default Food;
