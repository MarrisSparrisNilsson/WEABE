import React from 'react'
import Timer from './Timer'
import Notes from './Notes'

const App = () => {
    
    return (
        <div className="weabe-content">
            <div className="background"></div>

            <div className="studying-img background-img"></div>

            <div className="walking-img background-img"></div>

            <Timer />

            <Notes />
        </div>
    )
}

export default App
