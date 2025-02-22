import React from "react";

interface RectangularProps {
    index: number;
    fun : () => void;
}

const Rectangular : React.FC<RectangularProps> = ({fun}) => {
    const squareStyle = {
        width: '100px',
        height: '25px',
        backgroundColor: 'red'
    };
    return (
        <div>
            <div style={squareStyle}>
            </div>
            <button onClick={fun}>Usuń</button>
        </div>
    );
}

export default Rectangular;