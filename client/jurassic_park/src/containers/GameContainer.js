import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCardList from '../components/paddockCard/PaddockCardList';
import Timer from '../components/Timer';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      //dinos: [],
      //paddocks: []
     }
  }

  //request.get('/dinos')
    //.then((data) => {
      //this.setState({dinos: data})   ((((data.????))))
    //})

  //request.get('/paddocks')
    //.then((data) => {
      //this.setState({paddocks: data})   ((((data.????))))
    //})

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1;";
    }

  render() { 
    return ( 
      <>
        <button className="start-button" onClick={this.handleStartClick}>Start Game: Click to Enter</button>
        <h1>Welcome to Jurassic Park</h1> 
        <PaddockCardList />    
        <h2>€25,000 </h2>
        <InfoBox />   
      </>
     );
  }
}
 
export default GameContainer;