import React, { Component } from 'react';
import DinoList from './DinoList';
import BuyPaddockCard from './BuyPaddockCard';

class PaddockCard extends Component {
  constructor({props}) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.dinosForPaddock = this.dinosForPaddock.bind(this);
    this.calculateTotalPaddockRevenue = this.calculateTotalPaddockRevenue.bind(this);
    this.handleClickAddDino = this.handleClickAddDino.bind(this);
    this.handleRemovePaddock = this.handleRemovePaddock.bind(this);
    this.getOccupancy = this.getOccupancy.bind(this);
  }

  handleClick(e) {
    const elementToChange = e.target;
    elementToChange.style = "overflow: visible; height: auto; width: 50vw; border-radius: 0; background-color: white; transform: rotate(+1deg)";
    this.props.onHandleSelectPaddock(this.props.paddock);
  }

  handleClickClose(e) {
    e.stopPropagation();
    const elementToChange = e.target.parentElement;
    elementToChange.style = "height: 20px; width: 20px;";
  }

  handleClickAddDino(e) {
    e.stopPropagation();
    //post new dino
    this.props.onHandleOpenNewDinoCard();
  }

  handleRemovePaddock(e){
    e.stopPropagation();
    console.log(5);
    this.props.onHandleDeletePaddock()
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

    getOccupancy(){
      return this.props.paddock.dinoCapacity > this.props.paddock.dinosaurs.length ? true : false;
    }
    
  render() {
    const num = this.props.classId + 1;
    if (this.props.paddock.actionRequired === false) {
    return (
      <>
        {this.props.paddock.owned && <div className={"paddock-card-" + num} onClick={this.handleClick}>
        <h2 className="paddock-name">{this.props.paddock.name}</h2>
        <DinoList
          dinos={this.dinosForPaddock(this.props.paddock.id)}
          onHandleSelectDino={this.props.onHandleSelectDino}
          bankBalance={this.props.bankBalance}
          />
        <button className="close-button" onClick={this.handleClickClose}>Close Paddock</button>
        {this.getOccupancy() &&
        <button className="add-dino-button" onClick={this.handleClickAddDino}>Add Dinosaur</button>}
        {this.props.paddock.dinosaurs.length === 0 && <button className="remove-paddock-button" onClick={this.handleRemovePaddock}>Remove Paddock</button>}
        <p>Paddock Upkeep Cost: €{this.props.paddock.upKeepCost} | Paddock Revenue: €{this.calculateTotalPaddockRevenue()}</p>
      </div>}

      {!this.props.paddock.owned && <div className={"paddock-card-unowned-" + num} onClick={this.handleClick}>
        <BuyPaddockCard
          upKeepCost={this.props.paddock.upKeepCost}
          name={this.props.paddock.name}
          costToBuy={this.props.paddock.costToBuy}
          dinoCapacity={this.props.paddock.dinoCapacity}
          id={this.props.paddock.id}
          owned={this.props.paddock.owned}
          bankBalance={this.props.bankBalance}
          onHandleBuyPaddock={this.props.onHandleBuyPaddock}
        />           

        <button className="close-button" onClick={this.handleClickClose}>Close Paddock</button>
      </div>}
      </>
     )} else {
      return (
        <>
          {this.props.paddock.owned && <div className={"paddock-card-action-" + num} onClick={this.handleClick}>
          <h2 className="paddock-name">{this.props.paddock.name}</h2>
          <DinoList
            dinos={this.dinosForPaddock(this.props.paddock.id)}
            onHandleSelectDino={this.props.onHandleSelectDino}
            bankBalance={this.props.bankBalance}
            />
          <button className="close-button" onClick={this.handleClickClose}>Close Paddock</button>
          {this.getOccupancy() &&
          <button className="add-dino-button" onClick={this.handleClickAddDino}>Add Dinosaur</button>}
          {this.props.paddock.dinosaurs.length === 0 && <button className="remove-paddock-button" onClick={this.handleRemovePaddock}>Remove Paddock</button>}
          <p className="paddock-revenue-box">Paddock Upkeep Cost: €{this.props.paddock.upKeepCost} | Paddock Revenue: €{this.calculateTotalPaddockRevenue()}</p>

        </div>}
  
        {!this.props.paddock.owned && <div className={"paddock-card-unowned-" + num} onClick={this.handleClick}>
          <BuyPaddockCard
            upKeepCost={this.props.paddock.upKeepCost}
            name={this.props.paddock.name}
            costToBuy={this.props.paddock.costToBuy}
            dinoCapacity={this.props.paddock.dinoCapacity}
            id={this.props.paddock.id}
            bankBalance={this.props.bankBalance}
          />
          <button className="close-button" onClick={this.handleClickClose}>Close Paddock</button>
        </div>}
        </>
      )};
  }
}

export default PaddockCard;
