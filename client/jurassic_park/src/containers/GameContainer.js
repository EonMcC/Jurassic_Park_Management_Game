import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCard from './PaddockCard';
import Timer from '../components/Timer';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <h1>I'm a Header</h1> 
        <PaddockCard />
        <InfoBox />   
      </>
     );
  }
}
 
export default GameContainer;