import React, { useEffect } from 'react';
import { useState } from 'react';

const Counter: React.FC = () => {
    const [counter,setCounter] = useState(0);

    useEffect(() => {
        console.log('Hello world');
    },[]);

    useEffect(() => {
        console.log(`Licznik zwiększył się do ${counter}`);
    },[counter]);

    const add = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <div>Licznik: {counter}</div>
            <button onClick={add}>Dodaj</button>
        </div>
    );
};

export default Counter;