import React from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'

const Note = () => {
    return (
        <div className="note">
            <span>Hello World!</span>
            <div className="note-footer">
                <small>23/07/0690</small>
                <BsFillChatDotsFill/>
            </div>
        </div>
    )
}

export default Note
