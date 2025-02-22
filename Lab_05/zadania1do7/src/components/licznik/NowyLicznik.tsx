import React from "react";
import { useState } from "react";
import CButton from "./Przycisk";

const NewCounter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <div>Nowy licznik: {counter}</div>
            <CButton add={add}/>
        </div>
    );
};

export default NewCounter;