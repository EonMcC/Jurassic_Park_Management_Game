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
      bankBalance: 10

     }
     this.handleSelectPaddock = this.handleSelectPaddock.bind(this);
     this.handleSelectDino = this.handleSelectDino.bind(this);
     this.handleSelectFood = this.handleSelectFood.bind(this);
     this.handleOpenNewDinoCard = this.handleOpenNewDinoCard.bind(this);
     this.updateDinoFoodLevelWhenFed = this.updateDinoFoodLevelWhenFed.bind(this);
     this.handleClickCloseAddDino = this.handleClickCloseAddDino.bind(this);
     this.handleClickCloseFeedDino = this.handleClickCloseFeedDino.bind(this);
  }

  //request.get('/dinos')
    //.then((data) => {
      //this.setState({dinos: data})   ((((data.????))))
    //})

    componentDidMount() {
      //Get Paddocks
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

  }

    updateDinoFoodLevelWhenFed(replenLevel) {
      const dino = this.state.selectedDino;
      // const foodReplenLevel = this.state.selectedFood.replenLevel;
      dino.foodLevel += replenLevel;
      const request = new Request();
      const url = 'http://localhost:8080';
      request.patch(`${url}/dinosaurs/${dino.id}`, dino)

    }

    handleStartClick(e) {
      const elementToChange = document.querySelector('.start-button');
      elementToChange.style = "color: green; opacity: 0; z-index: -1;";

      // setInterval(this.timerPost, 5000);
    }

    // timerPost() {
    //   const request = new Request();
    //   request.post(url, payload)
    // }

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
          onHandleSelectDino={this.handleSelectDino}
          bankBalance={this.state.bankBalance}
          onHandleOpenNewDinoCard={this.handleOpenNewDinoCard}
          />
        <h2>€{this.state.bankBalance} </h2>
        <InfoBox />
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
                                      onHandleClickCloseAddDino={this.handleClickCloseAddDino}
                                      />}

      </>
     );
  }
}

export default GameContainer;
