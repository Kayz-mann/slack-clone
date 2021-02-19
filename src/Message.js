import React from 'react'
import "./Message.css"

function Message({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <img src={userImage} alt="avatar" />
            <div className="message__info">
                <h4>
                    {user}
                    <span className="message__timestamp">
                        {/* firebase way of writing date timestamp */}
                    {new Date(timestamp?.toDate()).toUTCString()}
                    </span> 
                </h4>
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Message