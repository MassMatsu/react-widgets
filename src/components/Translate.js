import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

import { options2 as options } from '../utils/data';

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        setSelected={setLanguage}
        label='Select a language'
      />

      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
