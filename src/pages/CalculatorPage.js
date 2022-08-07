import React, { useState } from 'react'

const CalculatorPage = () => {
  const [input1, setInput1] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
    setInput1(event.target.value);
  }

  return (
    <div>
      <p>Text</p>
      <p>You have entered {input1}.</p>
      <input name='input1' onChange={handleChange} />
    </div>
  )
}

export default CalculatorPage