import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <>
            <div className={`modalOverlay ${props.type}`}></div>
            <div className={props.state ? 'modal active' : 'modal'} id="modal">
                <div className="modal-header">
                    <div className="title">Edit Your Profile</div>
                    <button id="closeModal" className="close-btn">&times;</button>
                </div>
                <form className="modal-form">
                    <input type="text" placeholder="Name" className="input" name="name" id="updatedName" />
                    <input type="text" placeholder="Age" className="input" name="age" id="updatedAge" />
                    <input type="email" placeholder="Email" className="input" name="email" id="updatedEmail" />
                    <input type="password" placeholder="New Password" className="input" name="password" id="updatedPassword" />
                    <button className="btn" id="updateUserInfo">Save Changes!</button>
                </form>
            </div>
        </>,
        document.querySelector('#modal')
    );
}

export default Modal
