import React from 'react';

const EndGame = ({winner}) => {


    return(
        <div className="end-game-box">
            {winner && <h1> You won! </h1>}
            {winner === false && <h1>You lost!</h1>}
            <button className="reset-button" >Restart Game</button>
        </div>
    )
}

export default EndGame;