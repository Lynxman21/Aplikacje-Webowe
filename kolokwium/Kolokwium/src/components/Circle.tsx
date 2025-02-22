import React from 'react';

interface CircleProps {
    index: number;
    fun : () => void;
}

const Circle: React.FC<CircleProps> = ({fun}) => {
    const diameter = 50 * 2;
    const style = {
        width: diameter,
        height: diameter,
        backgroundColor: 'yellow',
        borderRadius: '50%',
    };

    return (
    <div>
        <div style={style}></div>
        <button onClick={fun}>Usuń</button>
    </div>
    );
};

export default Circle;