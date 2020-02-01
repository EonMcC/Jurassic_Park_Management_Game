import React, { Component } from 'react';
import DinoList from './DinoList';

class PaddockCard extends Component {
  constructor({props}) {
    super(props);
    this.state = { 
      combinedPaddockRevenue: 0
     }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClick(e) {
    const elementToChange = document.querySelector('.paddock-card');
    const secondElementToChange = document.querySelector('.close-button');
    elementToChange.style = "height: 100%; width: 100%; border-radius: 0; background-color: white;";
    secondElementToChange.style = "opacity: 1; z-index: 5;"
  }

  handleClickClose(e) {
    e.stopPropagation();
    const elementToChange = document.querySelector('.paddock-card');
    elementToChange.style = "border: 2px; background-color: blue; height: 15px; width: 15px; border-radius: 50%; overflow: hidden;";
  }

  handleClickAddDino(e) {
    e.stopPropagation();
    //post new dino
  }

  // calculateTotalPaddockRevenue
  componentDidMount() {
    let paddockRevenue = this.props.paddock.revenue;
    let dinoRevenue = 0;
    this.props.dinos.forEach(dino => dinoRevenue += dino.revenue); 
    this.setState({combinedPaddockRevenue: paddockRevenue + dinoRevenue});
  }

  render() { 
    return ( 
      <div>      
        <div className="paddock-card" onClick={this.handleClick}>      
        <p>Paddock Name</p>
        <DinoList dinos={this.props.dinos}/>
        <button className="add-dino-button" onClick={this.handleClickAddDino}>Add Dinosaur</button>
        <button className="close-button" onClick={this.handleClickClose}>X</button>
        <h6>Upkeep: €{this.props.paddock.upKeepCost}</h6>
        <h6>Paddock Revenue: €{this.state.combinedPaddockRevenue} Dinosaurs & Paddock</h6>
      </div>
      </div>
     );
  }
}
 
export default PaddockCard;