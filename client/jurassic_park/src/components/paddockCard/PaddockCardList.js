import React, {Component} from 'react';
import PaddockCard from './PaddockCard';

const PaddockCardList = ({paddocks, dinos, onHandleSelectDino, bankBalance, onHandleSelectPaddock, onHandleOpenNewDinoCard, onHandleBuyPaddock}) => {


  // const getDinosForPaddock = (paddockId) => {
  //   let foundDinos = dinos.map((dino) => {
  //     if (dino.paddockId === paddockId) {
  //       return dino;
  //     }
      
  //   })
  //   return foundDinos;
  // }

  const allPaddocks = paddocks.map((paddock) => {
    return (
      <PaddockCard 
        key={paddock.id} 
        id={paddock.id} 
        paddock={paddock} 
        dinos={dinos}
        onHandleSelectDino={onHandleSelectDino}
        bankBalance={bankBalance}
        onHandleSelectPaddock={onHandleSelectPaddock}
        onHandleOpenNewDinoCard={onHandleOpenNewDinoCard}
        onHandleBuyPaddock={onHandleBuyPaddock}
        />
    )
  })

  return (
    <>
      {allPaddocks}
    </>
  )
}
 
export default PaddockCardList;