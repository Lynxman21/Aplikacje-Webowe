import { useState } from "react";
import React from "react";

interface Student {
    firstname: string;
    lastname: string;
    year: number;
}

interface PropsAdd {
    addFunction: (student:Student) => void;
}

const Add: React.FC<PropsAdd> = ({addFunction}) => {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [year,setYear] = useState('');

    const fSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const y = Number(year);
        if (!firstname || !lastname || !year || isNaN(y)) {
            alert('Proszę wprowadzić wszystkie dane');
            return;
        }

        addFunction({
            firstname,
            lastname,
            year: y
        });

        setFirstname('');
        setLastname('');
        setYear('');
    };

    return (
        <form onSubmit={fSubmit}>
            <div>
                <label>
                    Imie: 
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </label>
                <label>
                    Nazwisko: 
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </label>
                <label>
                    Rocznik: 
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)}/>
                </label>
            </div>
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default Add