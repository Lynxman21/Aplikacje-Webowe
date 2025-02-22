import React, { useEffect } from 'react';
import { useState } from 'react';

const Counter: React.FC = () => {
    const getPrevCounts = () => {
        const savedCount = localStorage.getItem('counter');
        return savedCount ? parseInt(savedCount, 10) : 0;
    }

    const [counter,setCounter] = useState<number>(getPrevCounts());

    useEffect(() => {
        localStorage.setItem('counter',counter.toString());
    }, [counter]);

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