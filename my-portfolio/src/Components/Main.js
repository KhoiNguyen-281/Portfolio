
import "./Main.css"
import { useState } from 'react'

function WelcomeIntro() {
    const intro = "This page include all the information about me, please enjoy your journey while exploring more interesting information about me";
    const instructure = "Please scroll down to start"
    return(
        <div className="welcome">
            <div className="intro">
                {intro}
            </div>
            <div className="welcome-text">
                {instructure}
            </div>
        </div>
    );
}

function WelcomeSection() {
    const welcome = "welcome to my portfolio"
    const instuctor = "Next"
    return(
        <div className="welcome">
            <h1 className="welcome-heading">{welcome}</h1>
            <div className="welcome-instructure">
                <div className="welcome-text">{instuctor}</div>
            </div>
        </div>
    );
}



export default function Main() {

    
    const [section, setSection] = useState(WelcomeSection());


    return(
        <div className="main" onClick={() => setSection(WelcomeIntro())} >
            {section}
        </div>
    );
};