import React from "react";

interface SquareProps {
    index: number;
    fun : () => void;
}

const Square : React.FC<SquareProps> = ({fun, index}) => {
    const squareStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'blue'
    };

    return (
        <div>
            <div style={squareStyle}>
            </div>
            <button onClick={fun}>Usuń</button>
        </div>
    );
}

export default Square;