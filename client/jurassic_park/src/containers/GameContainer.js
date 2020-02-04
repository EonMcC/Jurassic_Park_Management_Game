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
      dinos: [],
      newDinos: [], //choices
      paddocks: [],
      foods: [],
      selectedPaddock: null,
      selectedNewDino: null, //the new dinosaur
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
     this.timerTrigger = this.timerTrigger.bind(this);
     this.calculateExpenditure = this.calculateExpenditure.bind(this);
     this.calculateIncome = this.calculateIncome.bind(this);
     this.calculateNet = this.calculateNet.bind(this);
     this.setBalance = this.setBalance.bind(this);
     this.decreaseFoodLevel = this.decreaseFoodLevel.bind(this);
     this.updateDinoFoodLevelWhenFed = this.updateDinoFoodLevelWhenFed.bind(this);

     this.handleNewDino = this.handleNewDino.bind(this);
     this.handleDeletePaddock = this.handleDeletePaddock.bind(this);

     this.handleClickCloseAddDino = this.handleClickCloseAddDino.bind(this);
     this.handleClickCloseFeedDino = this.handleClickCloseFeedDino.bind(this);

  }

    componentDidMount() {
      //Get Paddocks
  }

    // getDinos() {
    //   const request = new Request();
    //   const url = 'http://localhost:8080';
    //   request.get(`${url}/dinosaurs`)
    //   .then((data) => {
    //     this.setState({dinos: data._embedded.dinosaurs})
    //   })
    // }

    updateDinoFoodLevelWhenFed(replenLevel) {
      const dino = this.state.selectedDino;
      // const foodReplenLevel = this.state.selectedFood.replenLevel;
      dino.foodLevel += replenLevel;
      const request = new Request();
      const url = 'http://localhost:8080';
      request.patch(`${url}/dinosaurs/${dino.id}`, dino)

    }

    handleNewDino(dino) {
      // const paddock = this.state.selectedPaddock;
      // console.log(paddock);
      console.log(dino);

      // dino["paddock"] = this.state.selectedPaddock;
      const request = new Request();
      const url = 'http://localhost:8080';

      // request.post(`${url}/paddocks/${paddock.id}/dinosaurs`, dino)
      request.post(`${url}/dinosaurs`, dino).then( () => {
      // .then( () => {


      // })
      // this.getDinos();

      request.get(`${url}/dinosaurs`)
      .then((data) => {
        this.setState({dinos: data._embedded.dinosaurs})
      })

      request.get(`${url}/paddocks`)
      .then((data) => {
        this.setState({paddocks: data.paddocks})
      })

    })

      this.setState({showAddDino: false});
      this.takeDinoCostOffBalance(dino.buyValue);
    }

    handleDeletePaddock(){
      console.log(10);
      const request = new Request();
      const url = 'http://localhost:8080';
      const id = this.state.selectedPaddock.id;
      request.delete(`${url}/paddocks/${id}`)
      .then(()=>{
        const request = new Request();
        const url = 'http://localhost:8080';
        request.get(`${url}/paddocks`)
        .then((data) => {
          this.setState({paddocks: data._embedded.paddocks})
        })
      })
    }

    startCounter() {

       setInterval( () => this.timerTrigger(), 3000);
    }

    takeDinoCostOffBalance(cost){
      let newBalance = this.state.bankBalance - cost;
      this.setState({bankBalance: newBalance});
    }


    calculateIncome(){
      let newTotalIncome = 0;
      this.state.dinos.forEach((dino) => {
      newTotalIncome += dino.revenueIncrease;
      this.setState({totalIncome: newTotalIncome})

    })
  }

    calculateExpenditure(){
      let newTotalExpenditure = 0;
      this.state.paddocks.forEach((paddock) =>{
      if(paddock.owned === true){
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
        if(dino.foodLevel > 0){
        dino.foodLevel -= 1;
        }
        // else{this.endGame()}
      })
    }

    timerTrigger() {
      this.calculateIncome();
      this.calculateExpenditure();
      this.calculateNet();
      this.setBalance();
      this.decreaseFoodLevel();
      setTimeout( () => this.timerTrigger(), 3000);
    }

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1;";

      const request = new Request();
      const url = 'http://localhost:8080';
      request.get(`${url}/paddocks`)
      .then((data) => {
        this.setState({paddocks: data._embedded.paddocks})
      })
      //GetDinos
      request.get(`${url}/dinosaurs`)
      .then((data) => {
        this.setState({dinos: data._embedded.dinosaurs})
      })
      .then(()=> {
        this.setState({newDinos:
          this.state.dinos.slice(0, 2)
        })
      })
        //GetFoods
      request.get(`${url}/foods`)
      .then((data) => {
        this.setState({foods: data._embedded.foods})
      })

      this.timerTrigger();

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

    handleClickCloseFeedDino(){
      this.setState({showFoodContainer: false});
    }

    //handleSelectFood sets the state equal to the food that the user selects,
    //closes the FoodContainer and updates the bankBalance state.
    handleSelectFood(food) {
      const foodPrice = food.price;
      const currentBankBalance = this.state.bankBalance;
      const newBankBalance = currentBankBalance - foodPrice;
      this.setState({bankBalance: newBankBalance});
      this.setState({selectedFood: food});
      this.updateDinoFoodLevelWhenFed(food.replenLevel);
      this.setState({showFoodContainer: false});

    }


    handleOpenNewDinoCard(){
      this.setState({showAddDino: true});
    }

    handleClickCloseAddDino(){
      this.setState({showAddDino: false});
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
          onHandleDeletePaddock={this.handleDeletePaddock}
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
                                            selectedDino={this.state.selectedDino}
                                            onHandleClickCloseFeedDino={this.handleClickCloseFeedDino}
                                            />}
        {this.state.showAddDino && <AddDinoContainer
                                      newDinos={this.state.newDinos}
                                      bankBalance={this.state.bankBalance}
                                      onHandleAddNewDino={this.handleNewDino}
                                      selectedPaddock={this.state.selectedPaddock}
                                      onHandleClickCloseAddDino={this.handleClickCloseAddDino}
                                      />}

      </>
     );
  }
}

export default GameContainer;
