import React, {createRef} from 'react'
import pen from '../images/icons/pen-solid.svg'

const Notes = () => {

    // const penIcon = createRef()

    const openModal = (params) => {
        
    }
    

    return (
        <div className="notes-container">
            <span className="pen-container" onClick={openModal}>
                <img src={pen} alt="Edit" className="pen"/>
            </span>
            <h3>Notes / Cheklist</h3>

            <ul>
                <li className="note note1">Note 1</li>
                <li className="note note2">Note 2</li>
                <li className="note note3">Note 3</li>
                <li className="note note4">Note 4</li>
            </ul>
        </div>
    )
}

export default Notes
