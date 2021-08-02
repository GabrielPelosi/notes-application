import React from 'react'
import { useState } from "react";
import axios from 'axios'
import { BASE_URL } from '../util/RequestConstant'
import Popup from './Popup'


const AddNote = () => {

    const characterLimit = 50;

    const [noteForm, setNoteForm] = useState({
        noteDescription: '',
        noteSender: '',
        noteRecipient: ''
    });

    const onChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteForm({ ...noteForm, [event.target.name]: event.target.value });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if ((noteForm.noteDescription.length > 0)&& (noteForm.noteRecipient.length > 0 && noteForm.noteSender.length > 0)) {
            axios.post(`${BASE_URL}/notes`, noteForm)
                .then(response => {
                    window.location.reload();
                }).catch(err => {
                    console.log('err')
                })
        } else {
            setButtonPopUp(true)
        }

    }

    const [buttonPopUp, setButtonPopUp] = useState(false);


    return (
        <>
            <div className='note new'>
                <textarea
                    name="noteDescription"
                    rows='8'
                    cols='10'
                    placeholder='Type to add a note...'
                    value={noteForm.noteDescription}
                    onChange={onChange}
                ></textarea>
                <input type="text" maxLength="15" required placeholder="De:" name="noteSender" onChange={onChange} />
                <input type="text"  maxLength="15" required placeholder="Para:" name="noteRecipient" onChange={onChange} />
                <div className='note-footer'>
                    <small>
                        {characterLimit - noteForm.noteDescription.length} Remaining
                    </small>
                    <button className='save' onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
            <div>
                <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <h3>Erro!</h3>
                    <p>Todos os campos devem estar preenchidos!!</p>
                </Popup>
            </div>
        
        </>
    )
}

export default AddNote
