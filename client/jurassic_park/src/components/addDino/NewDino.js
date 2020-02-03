import React, { Component } from 'react';

class NewDino extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
        <button>Add this Dino!</button>
      </>
     );
  }
}
 
export default NewDino;