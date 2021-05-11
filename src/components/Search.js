import React, { useState } from 'react';

import wikipedia from '../api/wikipedia'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(term)
    onTermSubmit(term)
  }

  const onTermSubmit = async (term) => {
    const response = await axios.get(
      `www.https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&search=${term}`);
    console.log(response);
  }

  return (
    <>
      <div className='ui segment'>
        <form className='ui form' onSubmit={onFormSubmit}>
          <div className='field'>
            <label>Search</label>
            <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="ui segment"></div>
    </>
  );
};

export default Search;
