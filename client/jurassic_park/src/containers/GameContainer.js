import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCardList from '../components/paddockCard/PaddockCardList';
import FoodContainer from '../components/food/FoodContainer';
import Timer from '../components/Timer';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dinos: [
        {id: 1, paddockId: 1, foodLevel: 10, buyValue: 1, dietaryType: 'Herbivore', revenue: 1},
        {id: 2, paddockId: 2, foodLevel: 10, buyValue: 1, dietaryType: 'Carnivore', revenue: 1},
        {id: 3, paddockId: 2, foodLevel: 10, buyValue: 1, dietaryType: 'Carnivore', revenue: 1}
      ],
      paddocks: [
        {id: 1, name: "East Paddock", dinoCapacity: 5, costToBuy: 1, upKeepCost: 1, revenue: 1, owned: true},
        {id: 2, name: "West Paddock", dinoCapacity: 5, costToBuy: 1, upKeepCost: 1, revenue: 1, owned: true}
      ],
      foods: [
        {id: 1, name: "Shrubbery", replen: 3, cost: 1},
        {id: 2, name: "Cow", replen: 3, cost: 1}
      ],
      selectedDino: null,
      selectedFood: null,
      showFoodContainer: false
     }
     this.handleSelectDino = this.handleSelectDino.bind(this);
     this.handleSelectFood = this.handleSelectFood.bind(this);
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

      // setInterval(this.timerPost, 5000); 
    }

    // timerPost() {
    //   const request = new Request();
    //   request.post(url, payload)
    // }

    //handleSelectDino sets the state to equal the dino that the user selected
    //and opens the FoodContainer.
    handleSelectDino(dino) {
      this.setState({selectedDino: dino});
      this.setState({showFoodContainer: true});
    }

    //handleSelectFood sets the state equal to the food that the user selects,
    //closes the FoodContainer and sends the info to the database.
    handleSelectFood(food) {
      this.setState({selectedFood: food});
      this.setState({showFoodContainer: false});
    }

  render() { 
    return ( 
      <>
        <button className="start-button" onClick={this.handleStartClick}>Start Game: Click to Enter</button>
        <h1>Welcome to Jurassic Park</h1> 
        <PaddockCardList 
          paddocks={this.state.paddocks} 
          dinos={this.state.dinos} 
          onHandleSelectDino={this.handleSelectDino}
          />    
        <h2>€25,000 </h2>
        <InfoBox />
         {this.state.showFoodContainer && <FoodContainer 
                                            foods={this.state.foods}
                                            onHandleSelectFood={this.handleSelectFood}
                                            />}
         
      </>
     );
  }
}
 
export default GameContainer;