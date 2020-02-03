import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCardList from '../components/paddockCard/PaddockCardList';
import FoodContainer from '../components/food/FoodContainer';
import AddDinoContainer from '../components/addDino/AddDinoContainer';
import Request from '../helpers/requests';


class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dinos: [
        {id: 1, paddockId: 1, foodLevel: 10, buyValue: 1, dietaryType: 'Herbivore', revenue: 1},
        {id: 2, paddockId: 2, foodLevel: 10, buyValue: 1, dietaryType: 'Carnivore', revenue: 1},
        {id: 3, paddockId: 2, foodLevel: 10, buyValue: 1, dietaryType: 'Carnivore', revenue: 1}
      ],
      newDinos: [
        {foodLevel: 10, buyValue: 50, dietaryType: 'Herbivore', revenue: 1},
        {foodLevel: 10, buyValue: 100, dietaryType: 'Carnivore', revenue: 1}
      ],
      paddocks: [
        // {id: 1, name: "East Paddock", dinoCapacity: 5, costToBuy: 1, upKeepCost: 1, owned: true},
        // {id: 2, name: "West Paddock", dinoCapacity: 5, costToBuy: 1, upKeepCost: 1, owned: true}
      ],
      foods: [
        {id: 1, name: "Shrubbery", replen: 3, cost: 1},
        {id: 2, name: "Cow", replen: 3, cost: 2}
      ],
      selectedPaddock: null,
      selectedDino: null,
      selectedFood: null,
      showAddDino: false,
      showFoodContainer: false,
      bankBalance: 1,
      totalIncome: 0,
      totalExpenditure: 0,
      net: 0
     }

     this.handleStartClick = this.handleStartClick.bind(this);
     this.handleSelectPaddock = this.handleSelectPaddock.bind(this);
     this.handleSelectDino = this.handleSelectDino.bind(this);
     this.handleSelectFood = this.handleSelectFood.bind(this);
     this.handleOpenNewDinoCard = this.handleOpenNewDinoCard.bind(this);
     this.startCounter = this.startCounter.bind(this);
     this.timerTrigger = this.timerTrigger.bind(this);
     this.calculateExpenditure = this.calculateExpenditure.bind(this);
     this.calculateIncome = this.calculateIncome.bind(this);
     this.calculateNet = this.calculateNet.bind(this);
     this.setBalance = this.setBalance.bind(this);
     this.decreaseFoodLevel = this.decreaseFoodLevel.bind(this);
  }

    componentDidMount() {
      const request = new Request();
      const url = 'http://localhost:8080';

      request.get(`${url}/paddocks`)
      .then((data) => {
        this.setState({paddocks: data._embedded.paddocks})
      })
    }

    
    startCounter() {

       setInterval( () => this.timerTrigger(), 3000);

    }

    calculateIncome(){
      let newTotalIncome = 0;
      this.state.dinos.forEach((dino) => {
      newTotalIncome += dino.revenue;
      this.setState({totalIncome: newTotalIncome})

    })
  }
    
    calculateExpenditure(){
      let newTotalExpenditure = 0;
      this.state.paddocks.forEach((paddock) =>{
      if(paddock.owned = true){
      newTotalExpenditure += paddock.upKeepCost;
      }
      this.setState({totalExpenditure: newTotalExpenditure})
    })
  }

    calculateNet(){
      let newNet = 0;
      newNet = this.state.totalIncome - this.state.totalExpenditure;
      this.setState({net: newNet});
    };

    setBalance(){
      const value = this.state.bankBalance + this.state.net;
      this.setState({bankBalance: value});
    }

    decreaseFoodLevel(){
      this.state.dinos.forEach((dino) =>{
        dino.foodLevel -= 1;
      })
    }

    timerTrigger() {
      this.calculateIncome();
      this.calculateExpenditure();
      this.calculateNet();
      this.setBalance();
      this.decreaseFoodLevel();
    }

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1;";

      this.startCounter();
    }

        //handleSelectPaddock sets the state to equal the paddock that the user selected
    handleSelectPaddock(paddock) {
      this.setState({selectedPaddock: paddock});
    }

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

    handleOpenNewDinoCard(){
      this.setState({showAddDino: true});
    }

  render() { 
    return ( 
      <>
        <button className="start-button" onClick={this.handleStartClick}>Start Game: Click to Enter</button>
        <h1>Welcome to Jurassic Park</h1> 
        <PaddockCardList 
          paddocks={this.state.paddocks} 
          dinos={this.state.dinos} 
          onHandleSelectPaddock={this.handleSelectPaddock}
          onHandleSelectDino={this.handleSelectDino}
          bankBalance={this.state.bankBalance}
          onHandleOpenNewDinoCard={this.handleOpenNewDinoCard}
          />    
        <h2>€{this.state.bankBalance} </h2>
        <InfoBox 
          paddocks={this.state.paddocks}
          dinos={this.state.dinos}
          totalIncome={this.state.totalIncome}
          totalExpenditure={this.state.totalExpenditure}
          net={this.state.net}
          bankBalance={this.bankBalance}
                  />
         {this.state.showFoodContainer && <FoodContainer 
                                            foods={this.state.foods}
                                            onHandleSelectFood={this.handleSelectFood}
                                            bankBalance={this.state.bankBalance}
                                            />}
        {this.state.showAddDino && <AddDinoContainer 
                                      newDinos={this.state.newDinos}
                                      bankBalance={this.state.bankBalance}
                                      />}
         
      </>
     );
  }
}
 
export default GameContainer;