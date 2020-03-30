import React, { useState, useEffect } from 'react'
import arrow from '../images/icons/long-arrow-alt-right-solid.svg'

const Timer = () => {
    
    const [timer, setTimer] = useState(0)
    const [timeSchedule, setTimeSchedule] = useState({
        startTime: '09:00',
        lunchTime: '12:00',
        finishTime: '16:00'
    })
    
    useEffect(() => {
        setTimeout(() => {
            const time = new Date().toLocaleTimeString()
            setTimer(time)   
        }, 1000);
    }, [timer]);
    
    return (
        <div className="timeArea">
            <i></i>
            <span className="current timer">{timer}</span>
            <div className="timeSection">
                <div className="time-progress"></div>
                <span className="start timer">{timeSchedule.startTime}</span>
                <img src={arrow} className="arrow-icon" alt="Arrow"/>
                <span className="lunch timer">{timeSchedule.lunchTime}</span>
                <img src={arrow} className="arrow-icon" alt="Arrow"/>
                <span className="finish timer">{timeSchedule.finishTime}</span>
            </div>
            <div className="timerText">...time until break</div>
        </div>
    )
}

export default Timer
