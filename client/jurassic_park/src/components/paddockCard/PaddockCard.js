import React, { Component } from 'react';
import DinoList from './DinoList';
import BuyPaddockCard from './BuyPaddockCard';

class PaddockCard extends Component {
  constructor({props}) {
    super(props);
    this.state = { 
      
     }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.dinosForPaddock = this.dinosForPaddock.bind(this);
    this.calculateTotalPaddockRevenue = this.calculateTotalPaddockRevenue.bind(this);
    this.handleClickAddDino = this.handleClickAddDino.bind(this);
    this.handleClickCloseUnowned = this.handleClickCloseUnowned.bind(this);
  }

  handleClick(e) {
    const elementToChange = e.target;
    elementToChange.style = "height: 100%; width: 100%; border-radius: 0; background-color: white;";
    this.props.onHandleSelectPaddock(this.props.paddock);
  }

  handleClickClose(e) {
    e.stopPropagation();
    const elementToChange = e.target.parentElement;
    elementToChange.style = "border: 2px black solid; background-color: blue; height: 15px; width: 15px; border-radius: 50%; overflow: hidden;";
  }
  handleClickCloseUnowned(e) {
    e.stopPropagation();
    const elementToChange = e.target.parentElement;
    elementToChange.style = "border: 2px black solid; background-color: yellow; height: 15px; width: 15px; border-radius: 50%; overflow: hidden;";
  }

  handleClickAddDino(e) {
    e.stopPropagation();
    //post new dino
    this.props.onHandleOpenNewDinoCard();
  }

  dinosForPaddock(paddockId) {
    let currentPaddockDinos = [];
    this.props.dinos.forEach(dino => {
      if (dino._embedded.paddock.id === paddockId) {
        currentPaddockDinos.push(dino)
      }
    })
    return currentPaddockDinos;
  }

    calculateTotalPaddockRevenue() {
      let dinoRevenue = 0;
      const dinosThisPaddock = this.dinosForPaddock(this.props.id);
      dinosThisPaddock.forEach(dino => dinoRevenue += dino.revenue); 
      return dinoRevenue;
    }


  render() { 
    return ( 
      <div>    
        {this.props.paddock.owned && <div className="paddock-card" onClick={this.handleClick}>      
        <p>{this.props.paddock.name}</p>
        <DinoList 
          dinos={this.dinosForPaddock(this.props.paddock.id)} 
          onHandleSelectDino={this.props.onHandleSelectDino}
          bankBalance={this.props.bankBalance}
          />
        <button className="add-dino-button" onClick={this.handleClickAddDino}>Add Dinosaur</button>
        <button className="close-button" onClick={this.handleClickClose}>X</button>
        <h6>Upkeep: €{this.props.paddock.upKeepCost}</h6>
        <h6>Paddock Revenue: €{this.calculateTotalPaddockRevenue()} Dinosaurs & Paddock</h6>
      </div>}

      {!this.props.paddock.owned && <div className="paddock-card-unowned" onClick={this.handleClick}> 
        <BuyPaddockCard
          upKeepCost={this.props.paddock.upKeepCost}    
          name={this.props.paddock.name}
          costToBuy={this.props.paddock.costToBuy}
          dinoCapacity={this.props.paddock.dinoCapacity}
          id={this.props.paddock.id}
          bankBalance={this.props.bankBalance}
        />           
        <button className="close-button" onClick={this.handleClickCloseUnowned}>X</button>
      </div>}
      </div>
     );
  }
}
 
export default PaddockCard;