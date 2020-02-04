import React, { Component } from 'react';

class BuyPaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.checkCanAffordPaddock = this.checkCanAffordPaddock.bind(this);
    this.onClickChangePaddockOwned = this.onClickChangePaddockOwned.bind(this);
  }
  


  checkCanAffordPaddock(){
    const paddockPrice = this.props.costToBuy;
    const bankBalance = this.props.bankBalance;
    if (paddockPrice <= bankBalance) {
      return true;
    } else {
      return false;
    }
  }

  onClickChangePaddockOwned(e) {
    this.props.onHandleBuyPaddock(this.props.id);
  }

  render() { 
    return ( 
      <div>
        <p>{this.props.name}</p>
        <p>Dinosaur Capacity: {this.props.dinoCapacity}</p>
        <p>UpKeep Cost: {this.props.upKeepCost}</p>
        <p>Cost to Buy: {this.props.costToBuy}</p>
        {this.checkCanAffordPaddock() && <button onClick={this.onClickChangePaddockOwned}>Buy this Paddock</button>}
        {!this.checkCanAffordPaddock() && <h4>You can't afford this paddock right now</h4>}
      </div>
     );
  }
}
 
export default BuyPaddockCard;