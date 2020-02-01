import React from 'react';

const Dino = ({dino}) => {
  return (
    <div className="dino">
      <p>Food Level:{dino.foodLevel}</p>
      <p>Purchase Price: €{dino.buyValue}</p>
      <p>Dietary Type: {dino.dietaryType}</p>
      <p>Revenue: {dino.revenueIncrease}</p>
    </div>
  )
}

export default Dino;