import React from "react";

interface Student {
    firstname: string;
    lastname: string;
    year: number;
}

const Students: React.FC = () => {
    const Students: Student[] = [ 
        { firstname: 'Jan', lastname: 'Kowalski', year: 2022 }, 
        { firstname: 'Anna', lastname: 'Nowak', year: 2021 }, 
        { firstname: 'Piotr', lastname: 'Wiśniewski', year: 2023 }, 
    ];

    return (
        <table>
            <thead>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Rocznik</th>
            </thead>
            <tbody>
                {Students.map((student,index) => (
                    <tr key={index}>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Students;