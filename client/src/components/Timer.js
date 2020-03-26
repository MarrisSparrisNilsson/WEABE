import React, { useState, useEffect } from 'react'

const Timer = () => {
    
    const [timer, setTimer] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            const time = new Date().toLocaleTimeString()
            setTimer(time)   
        }, 1000);
    }, [timer]);
    
    return (
        <div className="timeArea">
            <div className="overflow">
                <div className="timeSection">
                    <div className="timeSection-slider"></div>
                    <span className="current timer">{timer}</span>
                    <span className="lunch timer">{timer}</span>
                    <span className="finish timer">{timer}</span>
                </div>
            </div>
            <div className="timerText">...time until break</div>
        </div>
    )
}

export default Timer
