import { useState } from 'react';
import './Practice.css';

const Practice=()=>{
    const [Studentname, setstudentName]= useState("Aayush");
    const studentArray= ['Manish', 'Aayush', 'Pragesh'];

    const getstudentName = (number)=> {
        return studentArray[number];
    }
        return (
        <div>
        <h1>Practice</h1>
        <div className="practice-container">
            <p id="name">{getstudentName(0)}</p>
        </div>
        </div>
    )
}

export default Practice;