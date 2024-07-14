import React from 'react';

function Child2({ onOptionChange }) {
  return (
    <div className='child2div'>
      <h3>Child Component 2</h3>
      <button onClick={() => onOptionChange('Option 2')}>Select Option 2</button>
    </div>
  );
}

export default Child2;