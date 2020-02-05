import React from 'react';

const Dino = ({dino, onHandleSelectDino, bankBalance}) => {

  const handleSelect = (e) => {
    e.stopPropagation();
    onHandleSelectDino(dino);
  }

  return (
    <div className="dino" onClick={handleSelect}>
      <h3>{dino.type}</h3>
<<<<<<< HEAD
      <p>Food Level:{dino.foodLevel}</p>
      <p>Dietary Type: {dino.dietaryType}</p>
=======
      <p>Food: {dino.foodLevel}</p>
      <p>Type: {dino.dietaryType}</p>
>>>>>>> eec130a112ce3b32495e082f49cc3a9ecbccea47
      <p>Revenue: {dino.revenueIncrease}</p>
    </div>
  )

}

export default Dino;
