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

  onClickAddNewDino(e) {
    const freshDino = {
      type: this.props.newDino.type,
      foodLevel: this.props.newDino.foodLevel,
      buyValue: this.props.newDino.buyValue,
      dietaryType: this.props.newDino.dietaryType,
      revenueIncrease: this.props.newDino.revenueIncrease,
      paddock: this.props.selectedPaddock._links.self.href
    
    }
    this.props.onHandleAddNewDino(freshDino);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const newPirate = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     age: this.state.age,
  //     ship: event.target.ship.value
  //   }
  //   this.props.onFormSubmit(newPirate);
  // }


  render() {
    return (
      <div className="dino">
        <h2>{this.props.newDino.type}</h2>
        <p>Dietary Type: {this.props.newDino.dietaryType}</p>
        <p>Cost: {this.props.newDino.buyValue}</p>
        <p>Revenue: {this.props.newDino.revenue}</p>
        {this.checkCanAffordDino() ? <button onClick={this.onClickAddNewDino}>Add this Dino!</button> : <h3>Can't Afford</h3>}
      </div>
     );
  }
}

export default NewDino;
