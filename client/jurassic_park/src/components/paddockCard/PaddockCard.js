import React, { Component } from 'react';
import DinoList from './DinoList';

class PaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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

  render() { 
    return ( 
      <div>      
        <div className="paddock-card" onClick={this.handleClick}>      
        <p>Paddock Name</p>
        <DinoList dinos={this.props.dinos}/>
        <button className="close-button" onClick={this.handleClickClose}>X</button>
      </div>
      </div>
     );
  }
}
 
export default PaddockCard;