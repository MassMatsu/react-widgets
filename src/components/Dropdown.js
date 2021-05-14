import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, setSelected, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener(
      'click',
      (e) => {
        if (ref.current && ref.current.contains(e.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        className='item'
        value={option.value}
        key={option.value}
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <form className='ui form' ref={ref}>
        <div className='field'>
          <label className='label'>{label}</label>
          <div
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </form>
      {/*<div className='ui segment'>
        <p style={{ color: selected.value }}>
          selected color is {selected.label}
        </p>
  </div>*/}
    </>
  );
};

export default Dropdown;
