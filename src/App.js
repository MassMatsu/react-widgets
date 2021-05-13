import React, { useState } from 'react';

//import { items, options } from './utils/data';
//import Accordion from './components/Accordion'
//import Search from './components/Search'
//import Dropdown from './components/Dropdown';
import Translate from './components/Translate'

const App = () => {
  //const [selected, setSelected] = useState(options[0]);

  return (
    <>
      {/*<Accordion items={items}/>*/}
      {/* <Search/> */}
      {/*<Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
        label='Select a color'
      />*/}
      <Translate />
    </>
  );
};

export default App;
