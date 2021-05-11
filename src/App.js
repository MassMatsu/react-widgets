import React from 'react';
import Accordion from './components/Accordion';
import {items} from './utils/data'

class App extends React.Component {
  
  render() {
    return (
      <>
        <Accordion items={items}/>
      </>
    );
  }
}

export default App;
