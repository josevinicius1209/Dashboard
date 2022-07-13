import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { SearchBar} from './Styles';

const Search: React.FC = () => {

    const [query, setQuery] = useState("");
    return (
        <>
            <FaSearch aria-hidden="true"/>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>          
        </>
    )
}

export default Search;