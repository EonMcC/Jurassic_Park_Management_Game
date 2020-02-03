import React, { Component } from 'react';

class BuyPaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <p>{this.props.name}</p>
        <p>Dinosaur Capacity: {this.props.dinoCapacity}</p>
        <p>UpKeep Cost: {this.props.upKeepCost}</p>
        <p>Cost to Buy: {this.props.costToBuy}</p>
        <button>Buy this Paddock</button>
      </div>
     );
  }
}
 
export default BuyPaddockCard;