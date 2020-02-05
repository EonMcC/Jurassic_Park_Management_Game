import React from 'react';
import Dino from './Dino';

const DinoList = ({dinos, onHandleSelectDino, bankBalance}) => {

  const allDinos = dinos.map((dino) => {
    return (
      <Dino 
      key={dino.id} 
      dino={dino} 
      onHandleSelectDino={onHandleSelectDino}
      bankBalance={bankBalance}
      />
    )
  })
  
    return ( 
      <div className="dino-list">
        {allDinos}
      </div>
     );
  
}
 
export default DinoList;