import React from "react";
import { useState } from "react";

const Form: React.FC = () => {
    const [text,setText] = useState('');

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={change}/>
            <div>{text}</div>
        </div>
    );
};

export default Form;