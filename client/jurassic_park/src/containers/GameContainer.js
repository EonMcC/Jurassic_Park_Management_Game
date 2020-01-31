import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCard from './PaddockCard';
import Timer from '../components/Timer';
// import '../../public/css/game-container.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <h1>Welcome to Jurassic Park</h1> 
        <PaddockCard />
        <h2>€25,000</h2>
        <InfoBox />   
      </>
     );
  }
}
 
export default GameContainer;