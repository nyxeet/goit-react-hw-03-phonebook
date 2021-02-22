import React from 'react';

const Filter = ({ value, changeFilter }) => (
  <label>
    Find contacts by name
    <br />
    <input
      type="text"
      value={value}
      onChange={e => changeFilter(e.target.value)}
    />
  </label>
);

export default Filter;
