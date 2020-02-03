import React from 'react';

const InfoBox = ({dinos, paddocks}) => {

  let totalIncome = 0;
  const calculateIncome = dinos.forEach((dino) => {
    totalIncome += dino.revenue;
    return totalIncome;

  })
  
  let totalExpenditure = 0;
  const calculateExpenditure = paddocks.forEach((paddock) =>{
    totalExpenditure += paddock.upKeepCost;
    return totalExpenditure;
  })
  
  
  
  return (
    <div className="info-box">
      <h3>Income:</h3>
      <p>{totalIncome}</p>
      <h3>Expenditure:</h3>
      <p>{totalExpenditure}</p>
      <h3>Net:</h3>
      <p>€700</p>
    </div>
  )
}

export default InfoBox;

// const handleDelete = () =>{
//   onDelete(ship.id)
// }

// const pirates = ship.pirates.map((pirate, index) => {
//   return <li key={index}><a href={`/pirates/${pirate.id}`}>{`${pirate.firstName} ${pirate.lastName}`}</a></li>
// })