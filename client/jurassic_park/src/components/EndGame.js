import React from 'react';

const EndGame = ({winner, onHandleReset}) => {

    const handleReset = (e) => {
        e.stopPropagation();
        onHandleReset()
    } 


    return(
        <div className="end-game-box">
            {winner && <h1> You won! </h1>}
            {winner === false && <h1>You lost!</h1>}
            <button onClick = {handleReset} className="reset-button" >Restart Game</button>
        </div>
    )
}

export default EndGame;