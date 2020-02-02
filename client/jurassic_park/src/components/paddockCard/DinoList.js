import React from 'react';
import Dino from './Dino';

const DinoList = ({dinos, onHandleSelectDino}) => {

  const allDinos = dinos.map((dino) => {
    return (
      <Dino 
      key={dino.id} 
      dino={dino} 
      onHandleSelectDino={onHandleSelectDino}
      />
    )
  })
  
    return ( 
      <>
        {allDinos}
      </>
     );
  
}
 
export default DinoList;