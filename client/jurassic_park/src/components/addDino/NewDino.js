import React, { Component } from 'react';

class NewDino extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.checkCanAffordDino = this.checkCanAffordDino.bind(this);
    this.onClickAddNewDino = this.onClickAddNewDino.bind(this);
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

  onClickAddNewDino() {
    this.props.onHandleAddNewDino(this.props.newDino);
  }


  render() { 
    return ( 
      <>
        <h2>{this.props.newDino.type}</h2>
        <p>Dietary Type: {this.props.newDino.dietaryType}</p>
        <p>Cost: {this.props.newDino.buyValue}</p>
        <p>Revenue: {this.props.newDino.revenue}</p>
        {this.checkCanAffordDino() && <button onClick={this.onClickAddNewDino}>Add this Dino!</button>}        
      </>
     );
  }
}
 
export default NewDino;