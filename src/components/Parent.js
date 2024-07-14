import React, { useState } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'
import '../styles/Child1.css'
import '../styles/Child2.css'

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className='maindiv'>
      <h1 className='parentcom'>Parent Component</h1>
      <Child1 onOptionChange={handleOptionChange}/>
      <Child2 onOptionChange={handleOptionChange}/>
      <p className='selectedopt'>Selected Option: {selectedOption}</p>
    </div>
    

  )
}

export default Parent