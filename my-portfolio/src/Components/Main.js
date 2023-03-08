
import "./Main.css"
import {useState, useRef } from 'react'
import PersonalInfo, { Experience } from "./Details/Personal";

function WelcomeIntro() {
    const intro = "This page include all the information about me, please enjoy your journey while exploring more interesting information about me";
    const instructure = "Please scroll down to start"

    const [scale, setScale] =  useState({scale: 1});

    let handleScroll =  ScrollAble(scale.scale, setScale);
    return(
        <div className="welcome" onWheelCapture={handleScroll} style={{transform: `scale(${scale.scale})`}} >
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

function useCustomHook() {
    const [section, setSection] = useState(<WelcomeSection></WelcomeSection>)

    const click = () => {
        setSection(<WelcomeIntro></WelcomeIntro>)
    }
    return [section, click]
}


function ScrollAble(scale, setScale) {

    const onScroll = (e) => {
        const factor = 0.1;
        const delta = e.deltaY / 180;
        const newScale =  scale - delta * factor;
    
        if (newScale > 0.2 && newScale < 1.00001) {
            setScale({
                scale: newScale
            });  
        }
    };
    return onScroll;
}

export function ChangableEle(scale, setScale) {

    const handleClick = () => {
        const tempScale = {
            default:  1,
            change: 3
        }

        let newScale;
        if (scale == tempScale.default) {
            newScale = tempScale.change;
        } else {
            newScale = tempScale.default;
        }

        setScale({scale: newScale})
    };
   
    return handleClick;
}


export default function Main() {
    
    const [section, setSection] = useCustomHook();
    return(
        <div className="main" onClick={setSection}>
            {/* <ChangableEle selectedSection = {PersonalInfo()} count={0}></ChangableEle> */}

            {section}
            <PersonalInfo></PersonalInfo>
        </div>
    );
};

