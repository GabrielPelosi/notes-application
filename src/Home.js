
import NoteList from './components/NotesList'

import { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from './util/RequestConstant'
import Pagination from './components/Pagination'
import React from 'react'
import AddNote from './components/AddNote'
import Loading from './components/Loading'

const Home = () => {

  const [activePAge, setActivePage] = useState(0);

  const [loading, setLoading] = useState(false);


  const changePage = (index) => {
    setActivePage(index);
  }

  const [notes, setNotes] = useState({
    content: [{
      id: 14,
      noteDescription: "",
      noteSender: "",
      noteRecipient: "",
      createdDate: ""
    }],
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    
    const fetchNotes = async () => {
      setLoading(true)
      const res = await axios.get(`${BASE_URL}/notes?page=${activePAge}&size=12&sort=createdDateTime,desc`)
      setNotes(res.data)
      setLoading(false)
    }
    fetchNotes();
  }, [activePAge])

  return (loading)? (
    <div className="container">
      <h2 className="m-1">Mural Online!</h2>
      <Loading/>
      <Pagination page={notes} onPageChange={changePage} />
      <AddNote />
    </div>
  ): (
    <div className="container">
      <h2 className="m-1">Mural Online!</h2>
      {
        notes.totalPages > 0 ? <NoteList notes={notes.content} />: "Sem posts por enquanto :("
      }
      
      <Pagination page={notes} onPageChange={changePage} />
      <AddNote />
    </div>
  )
}

export default Home
