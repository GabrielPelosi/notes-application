import React from 'react'
import {MdSearch} from 'react-icons/md'
import "./Search.css"
const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3rem"/> 
            <input className="search-input" onChange={(event)=> 
                handleSearchNote(event.target.value)
            } type="text" placeholder="Digite para pesquisar..."/>
            
        </div>
    )
}

export default Search
