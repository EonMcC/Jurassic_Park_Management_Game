import React, { Component } from 'react';
import InfoBox from '../components/InfoBox';
import PaddockCardList from '../components/paddockCard/PaddockCardList';
import FoodContainer from '../components/food/FoodContainer';
import AddDinoContainer from '../components/addDino/AddDinoContainer';
import EndGame from  '../components/EndGame';
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
      bankBalance: 10,
      totalIncome: 0,
      totalExpenditure: 0,
      net: 0,
      gameOver: false,
      isWinner: null,
      timeOutID: null,
      gameReset: false
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
     this.onHandleBuyPaddock = this.HandleBuyPaddock.bind(this);
     this.takePaddockCostOffBalance = this.takePaddockCostOffBalance.bind(this);
     this.takeDinoCostOffBalance = this.takeDinoCostOffBalance.bind(this);
     this.endGame = this.endGame.bind(this);
     this.checkGameOver = this.checkGameOver.bind(this);
     this.handleResetGame = this.handleResetGame.bind(this);


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
        this.setState({paddocks: data._embedded.paddocks})
      })

    })

      this.setState({showAddDino: false});
      this.takeDinoCostOffBalance(dino.buyValue);
    }

    handleDeletePaddock(){
      console.log(10);
      this.state.selectedPaddock.owned = false;

      const request = new Request();
      const url = 'http://localhost:8080';
      const id = this.state.selectedPaddock.id;

      request.patch(`${url}/paddocks/${id}`, {owned: false})
      .then(()=>{
        const request = new Request();
        const url = 'http://localhost:8080';
        request.get(`${url}/paddocks`)
        .then((data) => {
          this.setState({paddocks: data._embedded.paddocks})
        })
      })
    }

      // THIS WILL DELETE A PADDOCK
      // const request = new Request();
      // const url = 'http://localhost:8080';
      // const id = this.state.selectedPaddock.id;
      // request.delete(`${url}/paddocks/${id}`)
      // .then(()=>{
      //   const request = new Request();
      //   const url = 'http://localhost:8080';
      //   request.get(`${url}/paddocks`)
      //   .then((data) => {
      //     this.setState({paddocks: data._embedded.paddocks})
      //   })
      // })

    // startCounter() {

    //   setInterval( () => this.timerTrigger(), 3000);

    // }

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
        const request = new Request();
        const url = 'http://localhost:8080';

        if(dino.foodLevel > 0){
        dino.foodLevel -= 1;
        request.patch(`${url}/dinosaurs/${dino.id}`, dino)
        }
        if(dino.foodLevel < 4) {
          const paddockToChange = dino._embedded.paddock;
          const paddockId = paddockToChange.id;
          paddockToChange.actionRequired = true;
          request.patch(`${url}/paddocks/${paddockId}`, {actionRequired: true})
            .then(() =>{
              request.get(`${url}/paddocks`)
              .then((data) => {
              this.setState({paddocks: data._embedded.paddocks})
              })
            })
        }
        if (dino.foodLevel <= 0) {
          this.endGame(this.state.timeOutID);
          this.setState({isWinner: false});
        }
      })
    }

    timerTrigger() {
      this.calculateIncome();
      this.calculateExpenditure();
      this.calculateNet();
      this.setBalance();
      if(this.state.timeOutID > 0){
      this.decreaseFoodLevel();
      }
      this.checkGameOver();
      if(!this.state.gameOver){
      const start = setTimeout( () => this.timerTrigger(), 10000);
      this.setState({timeOutID: start});
      }
    }

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1; width: 1vw; height: 1vh;";

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
      .then(() => {
        const result = this.state.dinos.slice(0, 2);

        this.setState({newDinos:
          [...result]
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

    HandleBuyPaddock(id){
      const changedPaddock = this.state.paddocks.find((paddock) => {
        return paddock.id === parseInt(id);
      });
      changedPaddock.owned = true;
      this.setState({selectedPaddock: changedPaddock});

      // PATCH
      const request = new Request();
      const url = 'http://localhost:8080';
      const newID = changedPaddock.id;

      request.patch(`${url}/paddocks/${newID}`, {owned: true})

      this.takePaddockCostOffBalance(changedPaddock.costToBuy)
    }

    takePaddockCostOffBalance(cost){
      let newBalance = this.state.bankBalance - cost;
      this.setState({bankBalance: newBalance});
    }

    endGame(timeOutID){
      this.setState({gameOver: true});
      clearTimeout(timeOutID);
      // this.setState({timeOutID: null});

    }
    checkGameOver(){
      console.log(this.state.bankBalance);
      if(this.state.bankBalance <= 0 ){
        this.endGame(this.state.timeOutID);
        this.setState({isWinner: false});
      }
      else if(this.state.bankBalance >= 100){

        this.endGame(this.state.timeOutID);
        this.setState({isWinner: true});

      }

    }

  handleResetGame(){
    const request = new Request();
    const url = 'http://localhost:8080';
    let response = true;

    request.get(`${url}/games/reset`)
      .then((data) => {
        response = data;
      })
    .then( () => {
    const promise1 =  request.get(`${url}/paddocks`)
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
    //GetDinos
    request.get(`${url}/dinosaurs`)
    .then((data) => {
      this.setState({dinos: data._embedded.dinosaurs})
    })
    .then(()=> {
      const result = this.state.dinos.slice(0, 2);

        this.setState({newDinos:
          [...result]
      })
    })
      //GetFoods
    request.get(`${url}/foods`)
    .then((data) => {
      this.setState({foods: data._embedded.foods})
    });

  })

    .then(() => {
    this.setState({timeOutID: null});
    this.setState({isWinner: null});
    this.setState({gameReset: false});
    this.setState({bankBalance: 0});
    this.setState({net: 0});
    this.setState({totalIncome: 0});
    this.setState({totalExpenditure: 0});
    this.setState({gameOver: false});
    console.log("mew", this.state.timeOutID);

  })
  .then(() => {
    this.timerTrigger();
  })
        console.log(response);

      // request.get(`${url}/games/reset`)
      // .then((data) => {
      //   this.setState({gameReset: data})
      // })
      // .then( () => {
      //   setTimeout(Promise.all([promise1, promise2])
      //   .then(() => {
      //     this.timerTrigger()}, 10000))
      //   })
    }






  render() {
    return (
      <div className="game-container">
        <button className="start-button" onClick={this.handleStartClick}>Start Game: Click to Enter</button>
        <p className="header">Welcome to Jurassic Park</p>
        <PaddockCardList
          paddocks={this.state.paddocks}
          dinos={this.state.dinos}
          onHandleSelectPaddock={this.handleSelectPaddock}
          onHandleDeletePaddock={this.handleDeletePaddock}
          onHandleSelectDino={this.handleSelectDino}
          bankBalance={this.state.bankBalance}
          onHandleOpenNewDinoCard={this.handleOpenNewDinoCard}
          onHandleBuyPaddock={this.onHandleBuyPaddock}
          />
        <h2 className="bank">Bank €{this.state.bankBalance}</h2>

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
        {this.state.gameOver && <EndGame winner={this.state.isWinner} onHandleResetGame={this.handleResetGame}></EndGame>}
      </div>
     );
  }
}

export default GameContainer;
