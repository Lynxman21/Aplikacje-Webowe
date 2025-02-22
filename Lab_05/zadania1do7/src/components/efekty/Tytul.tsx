import React, { useEffect, useState } from "react";

const Title: React.FC = () => {
    const [t,setTitle] = useState('');

    useEffect(() => {
        document.title = t;
    },[t]);

    return (
        <div>
            <label>
                Tytuł: 
                <input type="text" value={t} onChange={(e) => setTitle(e.target.value)} />
            </label>
        </div>
    );
};

export default Title;