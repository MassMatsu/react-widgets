import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, setSelected }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  console.log(open)
  useEffect(() => {
    document.addEventListener('click', (e) => {
      console.log(ref.current)
      if (ref.current.contains(e.target)) {
        return
      }
      setOpen(false)
    }, {capture: true})
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }
    return (
      <div className='item' value={option.value} key={option.value} onClick={() => setSelected(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <form className='ui form' ref={ref}>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </form>
  );
};

export default Dropdown;
