import React from 'react';

const EndGame = ({onHandleResetGame}) => {

    const handleReset = (e) => {
        e.stopPropagation();
        onHandleResetGame();
    }

    return(
        <div className="end-game-box">
            <button className="reset-button" onClick={handleReset}>Restart Game</button>
        </div>
    )
}

export default EndGame;