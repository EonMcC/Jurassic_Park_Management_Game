import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="food-item">
        <h4>Food: {this.props.food.name}</h4>
        <h4>Replenishment: {this.props.food.replen}</h4>
        <h4>Cost: €{this.props.food.cost}</h4>
      </div>
     );
  }
}
 
export default Food;