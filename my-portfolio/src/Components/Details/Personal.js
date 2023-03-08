
import { useState } from "react";
import { ChangableEle } from "../Main";

import "./Detail.css"

function PersonalInfo() {

    const [scale, setScale] = useState({scale: 1});

    let handleClick =  ChangableEle(scale.scale, setScale);
    return(
        <div className="detail-section" style={{transform: `scale(${scale.scale})`}} onClickCapture={handleClick}  >
            <div className="section-heading">
                
            </div>
            <div className="section-body"></div>
        </div> 
    );
}


export function Experience() {
    return(
        <div className="detail-section" >
            <div className="section-heading">
                
            </div>
            <div className="section-body"></div>
        </div> 
    );
}


export default PersonalInfo;