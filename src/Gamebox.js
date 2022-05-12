import React from 'react'

function Gamebox({ val, onPlayerClick }) {
    //  const val = "O";
    const styles = {
        color: val === "X" ? "green" : "red",
    };
    return (
        <div
            onClick={() => onPlayerClick()}
            style={styles}
            className="game-box">{val}</div>
    );
}

export default Gamebox