import React, { Component } from 'react';
import PaddockCard from './PaddockCard';

const PaddockCardList = ({paddocks, dinos}) => {

  const allPaddocks = paddocks.map((paddock) => {
    return (
      <PaddockCard dinos={dinos}/>
    )
  })

  return (
    <>
      {allPaddocks}
    </>
  )
}
 
export default PaddockCardList;