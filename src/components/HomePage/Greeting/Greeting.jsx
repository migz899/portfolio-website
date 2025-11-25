
import { useState, useEffect, useMemo } from 'react'
import './Greeting.scss';

const Greeting = () => {

    const greetingsChoice = [
        "Welcome, Player One. Loading portfolio…",
        "Console.log('Glad you're here!');",
        "Portfolio Loading Successful!",
        "Deploying good vibes!",
        "You've just entered the debug zone"
    ];

    const chooseGreeting = useMemo(() => {
        const index = Math.floor(Math.random() * greetingsChoice.length);
        return greetingsChoice[index];
    }, []); // only runs once

    return (
        <header className="greeting-container">
            <div className="greeting-div">
                <h2 className='greeting'>{chooseGreeting}</h2>
            </div>
        </header>
    );
};

export default Greeting;