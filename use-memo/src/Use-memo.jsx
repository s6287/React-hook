// Importing React (needed to define components)
import React from 'react';
// Importing useState hook to manage local state
import { useState } from 'react';
// Importing useMemo hook to optimize performance by memoizing expensive computations
import { useMemo } from 'react';

function UseMemo() {
  // Declare a state variable `count` with an initial value of 15
  // `setCount` is used to update the value of `count`
  const [count, setCount] = useState(15);

  // 👇 Slow function to simulate a heavy computation
  // Takes a number, performs a meaningless loop to slow things down, and returns double the number
  function slow(num) {
    for (let i = 0; i <= 1000000; i++) {
      // Intentionally empty to simulate delay
    }
    return num * 2;
  }

  // 👇 Click handler function that decreases the `count` by 1 when the button is clicked
  function click() {
    setCount(count - 1);
  }

  // 👇 Wrapper function that will be passed to useMemo
  // It simply calls the slow function with a hardcoded value (2)
  // This helps us separate the actual slow logic from the useMemo hook
  function calculateSlowValue() {
    return slow(2); // 🟢 Changed from slowdown(2) to slow(2)
  }

  // 👇 useMemo memoizes the result of `calculateSlowValue`
  // This prevents `slow(2)` from being re-run on every render unless `count` changes
  // Even though the result is unused, it still demonstrates the optimization concept
  // Memoize the result — only recalculates when `count` changes
  const memoizedValue = useMemo(calculateSlowValue, [count]);

  // 👇 JSX returned by the component to render on the screen
  return (
    <>
      {/* Header text explaining purpose of the demo */}
      <h1>UseMemo is now used for performance optimization.</h1>

      {/* Display current value of `count` */}
      <h2>{count}</h2>
       <h3>Memoized Slow Value: {memoizedValue}</h3>
      

      {/* Button that triggers the click handler to decrement the count */}
      <button onClick={click}>Decrement</button>
    </>
  );
}

// 👇 Export the component so it can be used in other files (like App.js)
export default UseMemo;








// SYNTAX

// function calculateValue() {
//     return computeExpensiveValue(a, b);
//   }
  
//   const memoizedValue = useMemo(calculateValue, [a, b]);
  
