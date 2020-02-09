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
      newDinos: [],
      paddocks: [],
      foods: [],
      selectedPaddock: null,
      selectedNewDino: null,
      selectedDino: null,
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
     this.url = 'http://localhost:8080';
     this.request = new Request();
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
     this.handleBuyPaddock = this.handleBuyPaddock.bind(this);
     this.takeDinoCostOffBalance = this.takeDinoCostOffBalance.bind(this);
     this.endGame = this.endGame.bind(this);
     this.checkGameOver = this.checkGameOver.bind(this);
     this.handleResetGame = this.handleResetGame.bind(this);
  }

    updateDinoFoodLevelWhenFed(replenLevel) {
      const dino = this.state.selectedDino;
      dino.foodLevel += replenLevel; 
      this.request.patch(`${this.url}/dinosaurs/${dino.id}`, {foodLevel: dino.foodLevel});
      const dinosaurs = dino._embedded.paddock.dinosaurs;
      const paddockId = dino._embedded.paddock.id;
      let action = false;
      dinosaurs.forEach((dinosaur) => {
        if (dinosaur.foodLevel > 3) {
            action = true;
        }
      })
      if (action === true) {
        const change = {actionRequired: false}
        this.request.patch(`${this.url}/paddocks/${paddockId}`, change);
      }
    }

    handleNewDino(newDino) {     
      this.request.post(`${this.url}/dinosaurs`, newDino)
        .then( () => {
        this.request.get(`${this.url}/dinosaurs`)
          .then((data) => {
            this.setState({dinos: data._embedded.dinosaurs})
          })
          this.request.get(`${this.url}/paddocks`)
            .then((data) => {
              this.setState({paddocks: data._embedded.paddocks})
            })
            .then(() => {
              this.setBalance();
            })
        })
      this.setState({showAddDino: false});
      this.takeDinoCostOffBalance(newDino.buyValue);
    }

    handleDeletePaddock(){
      const paddockToChange = this.state.selectedPaddock;
      paddockToChange.owned = false;  
      const id = paddockToChange.id;
      this.request.patch(`${this.url}/paddocks/${id}`, {owned: false})
        .then(()=>{       
        this.request.get(`${this.url}/paddocks`)
          .then((data) => {
          this.setState({paddocks: data._embedded.paddocks})
          this.setBalance();
          })
          .then(() => {
            this.setBalance();
          })})
    }

    takeDinoCostOffBalance(dinoCost){
      const newBalance = this.state.bankBalance - dinoCost;
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
      this.state.paddocks.forEach((paddock) => {
        if(paddock.owned === true) {
          newTotalExpenditure += paddock.upKeepCost;
        }
        this.setState({totalExpenditure: newTotalExpenditure})
      })
    }

    calculateNet(){
      this.calculateIncome();
      this.calculateExpenditure();
      const newNet = this.state.totalIncome - this.state.totalExpenditure;
      this.setState({net: newNet});
    }

    setBalance(){
      this.calculateNet();
      const value = this.state.bankBalance + this.state.net;
      this.setState({bankBalance: value});
    }

    decreaseFoodLevel(){
      this.state.dinos.forEach((dino) => {      
        dino.foodLevel -= 1;
        this.request.patch(`${this.url}/dinosaurs/${dino.id}`, dino)
        if (dino.foodLevel < 4) {
          const paddockToChange = dino._embedded.paddock;
          const paddockId = paddockToChange.id;
          this.request.patch(`${this.url}/paddocks/${paddockId}`, {actionRequired: true})
            .then(() =>{
              this.request.get(`${this.url}/paddocks`)
              .then((data) => {
                this.setState({paddocks: data._embedded.paddocks})
              })
            })
        }
        if (dino.foodLevel <= 0) {
          this.endGame(this.state.timeOutID);
          this.setState({isWinner: false});
        }})
    }

    timerTrigger() {
      if(this.state.timeOutID > 0) {
        this.setBalance();
        this.decreaseFoodLevel();
      }
      this.checkGameOver();
      if (!this.state.gameOver) {
        const start = setTimeout(() => this.timerTrigger(), 6000);
        this.setState({timeOutID: start});
      }
    }

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1; width: 1vw; height: 1vh;";  
      this.timerTrigger();   
      this.request.get(`${this.url}/paddocks`)
      .then((data) => {
        this.setState({paddocks: data._embedded.paddocks})
      })
        .then(() => {
          this.request.get(`${this.url}/dinosaurs`)
          .then((data) => {
            this.setState({dinos: data._embedded.dinosaurs})
          })
          .then(() => {
            const result = this.state.dinos.slice(0, 2);
            this.setState({newDinos:
              [...result]
            })
          })
          .then(() => {
            this.request.get(`${this.url}/foods`)
            .then((data) => {
              this.setState({foods: data._embedded.foods})
            })
            .then(() => {
              this.setBalance();
            })})}) 
    }

    handleSelectPaddock(paddock) {
      this.setState({selectedPaddock: paddock});
    }

    handleSelectDino(dino) {
      this.setState({selectedDino: dino});
      this.setState({showFoodContainer: true});
    }

    handleClickCloseFeedDino(){
      this.setState({showFoodContainer: false});
    }

    handleSelectFood(food) {
      const foodPrice = food.price;
      const currentBankBalance = this.state.bankBalance;
      const newBankBalance = currentBankBalance - foodPrice;
      this.setState({bankBalance: newBankBalance});
      this.updateDinoFoodLevelWhenFed(food.replenLevel);
      this.setState({showFoodContainer: false});
    }

    handleOpenNewDinoCard(){
      this.setState({showAddDino: true});
    }

    handleClickCloseAddDino(){
      this.setState({showAddDino: false});
    }

    handleBuyPaddock(id){
      const changedPaddock = this.state.selectedPaddock;
      changedPaddock.owned = true;
      this.setState({selectedPaddock: changedPaddock});
      this.request.patch(`${this.url}/paddocks/${id}`, {owned: true})
      .then(() => {
        let newBalance = this.state.bankBalance - changedPaddock.costToBuy;
        this.setState({bankBalance: newBalance});
        this.setBalance();
      })
    }

    endGame(timeOutID) {
      this.setState({gameOver: true});
      clearTimeout(timeOutID);
    }

    checkGameOver() {
      if (this.state.bankBalance <= 0 ) {
        this.endGame(this.state.timeOutID);
        this.setState({isWinner: false});
      } else if (this.state.bankBalance >= 100) {
        this.endGame(this.state.timeOutID);
        this.setState({isWinner: true});
      }
    }

  handleResetGame(){
      this.request.get(`${this.url}/games/reset`)
      .then( () => {
        this.request.get(`${this.url}/paddocks`)
          .then((data) => {
            this.setState({paddocks: data._embedded.paddocks})
          })
          this.request.get(`${this.url}/dinosaurs`)
            .then((data) => {
              this.setState({dinos: data._embedded.dinosaurs})
            })
            .then(()=> {
              const result = this.state.dinos.slice(0, 2);
                this.setState({newDinos: [...result]
              })
            })
            this.request.get(`${this.url}/foods`)
              .then((data) => {
                this.setState({foods: data._embedded.foods})
              });
        })
        .then(() => {
          this.setState({timeOutID: null});
          this.setState({isWinner: null});
          this.setState({gameReset: false});
          this.setState({bankBalance: 10});
          this.setState({gameOver: false});
        })
        .then(() => {
          this.timerTrigger();
        })
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
          onHandleBuyPaddock={this.handleBuyPaddock}
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
