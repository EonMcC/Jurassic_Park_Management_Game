import React, { Component } from 'react';
import NewDinoList from './AddDinoList';

class AddDinoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClickCloseAddDino = this.handleClickCloseAddDino.bind(this);
  }

  handleClickCloseAddDino() {
    this.props.onHandleClickCloseAddDino()
  }

  render() {
    return (
      <div className="add-dino-container">
        <h2>Add a Dinosaur to the Paddock</h2>
      <NewDinoList
        newDinos={this.props.newDinos}
        bankBalance={this.props.bankBalance}
        onHandleAddNewDino={this.props.onHandleAddNewDino}
        selectedPaddock={this.props.selectedPaddock}
      />
        <button className="close-button" onClick={this.handleClickCloseAddDino}>X</button>
      </div>
     );
  }
}

export default AddDinoContainer;
