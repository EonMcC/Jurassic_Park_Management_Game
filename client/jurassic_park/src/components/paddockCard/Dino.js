import React from 'react';

const Dino = ({dino, onHandleSelectDino, bankBalance}) => {

  const handleSelect = (e) => {
    e.stopPropagation();
    onHandleSelectDino(dino);
  }

  return (
    <div className="dino" onClick={handleSelect}>
      <h3>{dino.type}</h3>
      <p>Food: {dino.foodLevel}</p>
      <p>Type: {dino.dietaryType}</p>
      <p>Revenue: {dino.revenueIncrease}</p>
    </div>
  )
  
}

export default Dino;