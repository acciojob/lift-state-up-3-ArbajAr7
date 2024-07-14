import React from 'react';

function Child1({ onOptionChange }) {
  return (
    <div className='child1div'>
      <h3>Child Component 1</h3>
      <button onClick={() => onOptionChange('Option 1')}>Select Option 1</button>
    </div>
  );
}

export default Child1;