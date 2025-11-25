
import { useState, useEffect, useMemo } from 'react'
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import './HomePage.scss';
import { TypeWritterAnimationMultiple } from '../../utils/TypeWritterAnimationMultiple';

import selfimg from '../../assets/photos/self_photo.webp'
import selfimgbg from '../../assets/photos/self_photo_bg.webp'

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const typeWritterChoices = [
        "Front-End Web Developer",
        "HTML5 Game Developer",
        "Experimental Developer",
        "Drinks Coffee like Vitamins",
    ];

    const [text, setText] = useState("");

    useEffect(() => {
        const tw = TypeWritterAnimationMultiple(typeWritterChoices, setText, 39, 50, 1200);
        return () => tw.stop(); // clean up when unmounted
    }, []);

    return (
        <header className="homePage-container" id="home">
            <div className="introduction">
                <h2>Hello<span className="red-text">.</span></h2>
                <h3>I'm Migz</h3>
                <div className="typewriter-container"><h1>{text}</h1></div>
            </div>

            <div className='photo-section'>
                <img className="photo-bg" src={selfimgbg} alt="self photo" width="800" height="700"></img>
                <img src={selfimg} alt="self photo" width="600" height="620"></img>
            </div>


        </header>
    );
};

export default HomePage;