import React, { useState } from "react";
import Add from "./Dodawanie";

interface Student {
    firstname: string;
    lastname: string;
    year: number;
}

const StudentManager: React.FC = () => {
    const [students,setStudents] = useState<Student[]>([
        { firstname: 'Jan', lastname: 'Kowalski', year: 2022 }, 
        { firstname: 'Anna', lastname: 'Nowak', year: 2021 }, 
        { firstname: 'Piotr', lastname: 'Wiśniewski', year: 2023 }, 
    ]);

    const addStudent = (student: Student) => {
        setStudents((prevStudents) => [...prevStudents, student]);
    };

    return (
        <div>
            <table>
                <thead>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Rocznik</th>
                </thead>
                <tbody>
                    {students.map((student,index) => (
                        <tr key={index}>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Add addFunction={addStudent}/> 
        </div>
    );
};

export default StudentManager;