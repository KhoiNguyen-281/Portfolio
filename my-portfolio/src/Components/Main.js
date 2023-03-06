
import "./Main.css"
import {useState, useRef } from 'react'

function WelcomeIntro() {
    const intro = "This page include all the information about me, please enjoy your journey while exploring more interesting information about me";
    const instructure = "Please scroll down to start"
    return(
        <>
            <div className="intro">
                {intro}
            </div>
            <div className="welcome-text">
                {instructure}
            </div>
        </>
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


function UseWelcomeSection() {

    const [section, setSection] = useState(WelcomeSection());
    return(
        <div onClick={() => setSection(ScrollAble())}>
            {section} 
        </div>
    );
    
    
}

function ScrollAble() {

    const[temp, setTemp] = useState({scale: 1});
    // const section = WelcomeIntro();

    const onScroll = (e) => {
        const factor = 0.1;
        const delta = e.deltaY / 200;
        const newScale =  temp.scale + delta * factor;
    
        if (newScale > 0.3 && newScale < 1) {
            setTemp({
                scale: newScale
            });  
        }
    };

    
    return(
        <div className="welcome" style={{transform: `scale(${temp.scale})`}} onWheelCapture={onScroll}>
            <WelcomeIntro></WelcomeIntro>
        </div>
    );
}

function ChangableEle({section , count}) {

    const currentSection = useRef(section)

    const newCSS = {
        transform: 'scale(0.3)'
    }
    const handleClick= () => {
        
        if (count === 0) {
            
            currentSection.current.style.transform = 'scale(0.3)';
            count += 1;
            
        } else {
            currentSection.current.style.transform = `scale(1)`
            // setNextStyle(default)
            count-=1;
        }

    };
   
    return (
        <div ref={currentSection} style={{transform: 'scale(1)'}} onClick={handleClick}>
            {section}
        </div>
    );
}

export default function Main() {
    
    
    return(
        <div className="main">
            {/* <ChangableEle section={UseWelcomeSection()} count ={0}></ChangableEle> */}
            {/* <ScrollAble ></ScrollAble> */}
            <UseWelcomeSection></UseWelcomeSection>
        </div>
    );
};