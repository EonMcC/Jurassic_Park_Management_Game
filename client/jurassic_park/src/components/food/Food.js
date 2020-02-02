import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.props.onHandleSelectFood(this.props.food);
  }

  render() { 

    return ( 
      <div className="food-item" onClick={this.handleSelect}>
        <h4>Food: {this.props.food.name}</h4>
        <h4>Replenishment: {this.props.food.replen}</h4>
        <h4>Cost: €{this.props.food.cost}</h4>
      </div>
     );
  }
}
 
export default Food;