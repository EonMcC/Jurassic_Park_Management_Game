import React from 'react';

const Dino = ({dino}) => {
  return (
    <div className="dino">
      <p>Food Level:{dino.foodLevel}</p>
      <p>Dietary Type: {dino.dietaryType}</p>
      <p>Revenue: {dino.revenueIncrease}</p>
    </div>
  )
}

export default Dino;