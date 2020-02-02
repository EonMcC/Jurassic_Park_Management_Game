import React, { Component } from 'react';
import PaddockCard from './PaddockCard';

const PaddockCardList = ({paddocks, dinos}) => {


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
      <PaddockCard key={paddock.id} id={paddock.id} paddock={paddock} dinos={dinos}/>
    )
  })

  return (
    <>
      {allPaddocks}
    </>
  )
}
 
export default PaddockCardList;