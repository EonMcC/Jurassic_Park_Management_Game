import React, { Component } from 'react';
import FoodList from './FoodList';

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div className="food-container">
        <h1>FoodContainer</h1>
        <FoodList 
          foods={this.props.foods}
          onHandleSelectFood={this.props.onHandleSelectFood}/>
      </div>
     );
  }
}
 
export default FoodContainer;