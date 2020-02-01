import React, { Component } from 'react';
import Dino from './Dino';

const DinoList = ({dinos}) => {

  const allDinos = dinos.map((dino) => {
    return (
      <Dino dino={dino}/>
    )
  })
  
    return ( 
      <>
        {allDinos}
      </>
     );
  
}
 
export default DinoList;