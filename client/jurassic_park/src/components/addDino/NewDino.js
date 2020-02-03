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
    if (dinoCost <= bankBalance) {
      return true;
    } else {
      return false;
    }
  }


  render() { 
    return ( 
      <>
        <h2>Iguanadon</h2>
        <p>Herbivore</p>
        <p>€1000</p>
        <p>€50</p>
        {/* AddDino button can send a post request from here? Rather than back up the chain? */}
        <button>Add this Dino!</button>

        <h2>T-Rex</h2>
        <p>Carnivore</p>
        <p>€2000</p>
        <p>€100</p>
        {this.checkCanAffordDino() && <button>Add this Dino!</button>}
        
      </>
     );
  }
}
 
export default NewDino;