import React, { Component } from 'react';
import NewDino from './NewDino';

class AddDinoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const splitNewDinos = this.props.newDinos.map((dino, index) => {
      return (
        <NewDino
          key={index}
          newDino={dino}
          bankBalance={this.props.bankBalance}
          onHandleAddNewDino={this.props.onHandleAddNewDino}
          selectedPaddock={this.props.selectedPaddock}
        />
      )
    })
    return (
      (splitNewDinos)
     );
  }
}

export default AddDinoList;
