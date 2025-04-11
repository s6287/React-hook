import { useState } from 'react';
import './App.css';
import UseMemo from './Use-memo';

function App() {
  const [counter, setCounter] = useState(0);

  function slowdown(num) {
    console.log('Running slow function...');
    for (let i = 0; i <= 1000000000; i++) {
      // Just to simulate heavy load
    }
    return num * 2;
  }

  function click() {
    slowdown(2); // 👈 this will slow down every click
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Slowing down performance when clicking increment it slow down because of slowdown function.</h1>
      <h2>It will be fixed by use memo.</h2>
      <h2>{counter}</h2>
      <button onClick={click}>Increment</button>

      <UseMemo/>
    </>
  );
}

export default App;
