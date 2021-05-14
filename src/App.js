import React, { useState } from 'react';

import { items, options } from './utils/data';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './route/Route';
import Header from './components/Header'


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Header/>
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown options={options}
          selected={selected}
          setSelected={setSelected}
          label='Select a color'/>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </>
  );
};

export default App;
