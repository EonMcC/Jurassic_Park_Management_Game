import React, { Component } from 'react';
import NewDino from './NewDino';

class AddDinoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const splitNewDinos = this.props.newDinos.map(dino => {
      return (
        <NewDino 
          dino={dino}
          bankBalance={this.props.bankBalance}
          />
      )
    })
    return ( 
      <NewDino 
        newDino={splitNewDinos}
        bankBalance={this.props.bankBalance}
        />
     );
  }
}
 
export default AddDinoList;