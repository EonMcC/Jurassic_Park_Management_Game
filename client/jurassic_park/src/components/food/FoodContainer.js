import React, { Component } from 'react';
import FoodList from './FoodList';

class FoodContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClickCloseFeedDino = this.handleClickCloseFeedDino.bind(this);
  }

  handleClickCloseFeedDino(){
    this.props.onHandleClickCloseFeedDino();
  }

  render() { 
    return ( 
      <div className="food-container">
        <h2>Feed Dinosaur</h2>
        <FoodList 
          foods={this.props.foods}
          onHandleSelectFood={this.props.onHandleSelectFood}
          bankBalance={this.props.bankBalance}
          selectedDino={this.props.selectedDino}
          />
          <button className="close-button" onClick={this.handleClickCloseFeedDino}>Close Feed Dinosaur</button>

      </div>
     );
  }
}
 
export default FoodContainer;