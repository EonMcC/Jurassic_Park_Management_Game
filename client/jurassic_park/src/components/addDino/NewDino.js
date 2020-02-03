import React, { Component } from 'react';

class NewDino extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.checkCanAffordDino = this.checkCanAffordDino.bind(this);
  }

  checkCanAffordDino(){
    const dinoCost = this.props.newDino.buyValue;
    const bankBalance = this.props.bankBalance;
    console.log(dinoCost);
    console.log(`Bank: ${bankBalance}`);
    if (dinoCost <= bankBalance) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    return (
      <>
        <h2>{this.props.newDino.type}</h2>
        <p>Dietary Type: {this.props.newDino.dietaryType}</p>
        <p>Cost: {this.props.newDino.buyValue}</p>
        <p>Revenue: {this.props.newDino.revenueIncrease}</p>
        {this.checkCanAffordDino() && <button>Add this Dino!</button>}
      </>
     );
  }
}

export default NewDino;
