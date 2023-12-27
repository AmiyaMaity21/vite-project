import React, { useState } from 'react'
function Controlled() {
    let [fname, setFName] = useState('');
    let [lname, setLName] = useState('');

    const handleFnameChange = (e) => {
        setFName(e.target.value);
    }
    const handleLNameChange = (e) => {
        setLName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted successfully');
    }
    return (
        <div>
            <h1>Controlled</h1>
            <p>change</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fname} onchange={handleFnameChange} name='fname' placeholder='First Name ' />
                <input type="text" value={fname} onchange={handleLNameChange} name='lname' placeholder='Last Name ' />
            </form>
        </div>
    )
}