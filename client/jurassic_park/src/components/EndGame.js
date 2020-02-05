import React from 'react';

const EndGame = ({onHandleResetGame, winner}) => {

    const handleReset = (e) => {
        e.stopPropagation();
        onHandleResetGame();
    }

    return(
        <div className="end-game-box">
            {winner && <h2>Congratulations, you won!</h2>}
            {!winner && <h2>Sorry, better luck next time!</h2>}
            <button className="reset-button" onClick={handleReset}>Restart Game</button>
        </div>
    )
}

export default EndGame;