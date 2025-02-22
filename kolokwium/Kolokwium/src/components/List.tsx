import React, { useState } from 'react';
import Circle from './Circle';
import Square from './Square';
import Rectangle from './Rectangular';
import './List.css';

const List: React.FC = () => {
    const [components, setComponents] = useState<JSX.Element[]>([
        <Circle index={1}/>,
        <Square index={2}/>,
        <Rectangle index={3}/>
    ]);

    const addSquare = () => {
        setComponents([...components, <Square />]);
    }
    const addRectangular = () => {
        setComponents([...components, <Rectangle />]);
    }
    const addCircle = () => {
        setComponents([...components, <Circle />]);
    }

    return (
        <div>
            {components.map((component, index) => (
                <div key={index}>{component}</div>
            ))}
            <button onClick={addSquare}>Dodaj kwadrat</button>
            <button onClick={addRectangular}>Dodaj prostokąt</button>
            <button onClick={addCircle}>Dodaj koło</button>
        </div>
    );
}

export default List;