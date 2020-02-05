import React from 'react';

const InfoBox = ({totalIncome, totalExpenditure, net}) => {

  return (
    <div className="info-box">
      <h3>Income</h3>
      <p>{totalIncome}</p>
      <h3>Expenditure</h3>
      <p>{totalExpenditure}</p>
      <h3>Net</h3>
      <p className="net">{net}</p>
    </div>
  )
}

export default InfoBox;
