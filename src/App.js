import { useState } from 'react';

function App() {
const [ count, setCount ] = useState(0)

  return (
    <div className='background'>
      <h1 className='head'>COUNTER</h1>
      <p className='count'>{count}</p>
      <button className='button1'
      onClick={() =>
      setCount(count + 1)
      }>+</button>
      <button className='button2' onClick={() => 
      setCount(count - 1)  
      }>-</button>
    </div>
  );
}

export default App;
