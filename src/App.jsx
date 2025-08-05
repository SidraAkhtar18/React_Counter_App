import React, { useState } from 'react';


const App = () => {
  const [num, setnum] = useState(0); 

  const increment = () => {
    setnum(num + 1);
  }

  const decrement = () => {
    if (num <= 0) {
      
      alert("Number cannot be less than 0"); // corrected message
      return;
    }
    setnum(num - 1);
  }

  return (
    <div className="container">
      <h3>Number is : {num}</h3>
      <button onClick={increment}>Increment by 1</button> <br />
      <button onClick={decrement}>Decrement by 1</button>

    </div>
  );
}

export default App;
