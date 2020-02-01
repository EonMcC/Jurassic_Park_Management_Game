import React, { Component } from 'react';
import DinoList from './DinoList';

class PaddockCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const elementToChange = document.querySelector('.paddock-card');
    elementToChange.style = "height: 100%; width: 100%; border-radius: 0; background-color: white;";
  }

  render() { 
    return ( 
      <div className="paddock-card" onClick={this.handleClick}>
        <p>East Paddock</p>
        <DinoList />
      </div>
     );
  }
}
 
export default PaddockCard;