import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
    const [counter,setCounter] = useState(15);
    const [works,setWork] = useState(false);

    useEffect(() => {
        let interval: number;
        if (works && counter > 0) {
            interval = setInterval(() => {
                setCounter((prevCount) => Math.max(prevCount-0.1,0));
            },100);
        }

        return () => clearInterval(interval);
    },[works,counter]);

    const Click = () => {
        if (counter === 0) {
            return;
        }
        setWork(!works);
    };

    return (
        <div>
            <div>Licznik: {counter.toFixed(1)} sek</div>
            <button onClick={Click} disabled={counter===0}>
                {counter===0 ? 'Odliczanie zakończone' : works ? 'STOP' : 'START'}
            </button>
        </div>
    );
};

export default Timer;