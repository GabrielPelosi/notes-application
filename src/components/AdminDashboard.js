import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";
import { BASE_URL } from '.././util/RequestConstant'
import { setupInterceptorsTo } from '../util/interceptors'
import NoteList from './NotesList'
import './AdminDashboard.css'
import history from './../util/histoyConfig'
import Search from './Search';

setupInterceptorsTo(axios)

const AdminDashboard = ({ props }) => {

    const{noteNotFoundErr, setNoteNotFoundErr} = useState(false)

    const [noteID, setNoteID] = useState({
        id: 0
    });
    const onChangeID = (event) => {
        event.preventDefault()
        setNoteID({ ...noteID, [event.target.name]: event.target.value })
    }
    const onSubmitDelete = (event) => {
        event.preventDefault()
        axios.delete(`${BASE_URL}/admin/note/${noteID.id}`)
        .then(() =>{
            window.location.reload();
        }).catch(err => {

        })
    }
    const [notes, setNotes] = useState([
        {
            id: 14,
            noteDescription: "",
            noteSender: "",
            noteRecipient: "",
            createdDate: ""
        }]
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/admin/notes`).then(resp => {
            setNotes(resp.data)
        }).catch(err => {
            history.push('system-admin-login')
        })

    }, [])

    const deleteNote = () => {
        setupInterceptorsTo(axios)
        axios.delete(`${BASE_URL}/note/2`).then(response => {

        }).catch(err => {

        })
    }

    const [searchText, setSearchText] = useState("")

    return (localStorage.getItem('jwt-token') !== null) ? (
        <div className="float-container">
            <h4>Admin dashboard!</h4>
            <div className="float-child">
                <form onSubmit={onSubmitDelete} className="form-delete">
                    <label className="delete-label">Introduza o ID para deletar</label>
                    <input onChange={onChangeID} className="delete-input" type="number" name="id" required placeholder="ID" />
                    <button type="submit" className="delete-button">Deletar Nota</button>
                </form>
            </div>
            <Search handleSearchNote={setSearchText}/>
            <div className="float-child-scroller">
                <NoteList notes={ notes.filter((note) => note.noteDescription.toLowerCase().includes(searchText.toLocaleLowerCase())) } />
            </div>
        </div>
    ) : <div>Sai fora doidao</div>
}

export default AdminDashboard
