import React from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'

const Note = ({ id, text, sender, recipient, createdDate }) => {
    return (
        <>
        
            <div className="note">
            <small className="id-style">ID:{id}</small>
                <span>{text}</span>
                <div className="note-footer">
                    <small>De: {sender}</small>
                    <small>Para: {recipient}</small>
                    <small>{createdDate}</small>

                    <BsFillChatDotsFill />
                </div>
            </div>
        </>
    )
}

export default Note
