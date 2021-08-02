import React from 'react'
import Note from './Note'


const NotesList = ({ notes }) => {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (<Note id={note.id} text={note.noteDescription} 
                                    sender={note.noteSender} recipient={note.noteRecipient} createdDate={note.createdDate} />))
            }
        </div>
    )
}

export default NotesList
