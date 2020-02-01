import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCardList from '../components/paddockCard/PaddockCardList';
import Timer from '../components/Timer';
// import '../../public/css/game-container.css';

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

  render() { 
    return ( 
      <>
        <h1>Welcome to Jurassic Park</h1> 
        <PaddockCardList />    
        <h2>€25,000 </h2>
        <InfoBox />   
      </>
     );
  }
}
 
export default GameContainer;