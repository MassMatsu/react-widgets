import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term)

  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 3000)
    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    if (debouncedTerm) {
     fetchData(debouncedTerm) 
    }
  }, [debouncedTerm]);

  const fetchData = async (term) => {
    const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term,
      },
    });
    setResults(data.query.search);
  };

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className='ui segment'>
        <div className='ui form'>
          <div className='field'>
            <label>Search</label>
            <input
              className='input'
              type='text'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
        <div className='ui celled list'>{renderedResults}</div>
      </div>
    </>
  );
};

export default Search;
