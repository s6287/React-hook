import React, { createContext, useState } from 'react';
import B from './B';

// ❌ Common Mistake 1: Creating context inside the component (DON'T do this)
// ✅ Correct: Always create the context OUTSIDE the component to prevent re-creation.
export const MyContext = createContext();

function A() {
  const [theme, setTheme] = useState(true);

  // ❌ Common Mistake 2: Comparing boolean with string (theme === 'true') is WRONG!
  // ✅ Correct: Just check if (theme) since it's already a boolean.
  function Toggle() {
    if (theme) {
      setTheme(false); // Switch to Light Mode
    } else {
      setTheme(true);  // Switch to Dark Mode
    }
  }

  return (
    // ❌ Common Mistake 3: Not providing a `value` in the Provider (useContext will break)
    // ✅ Correct: Always pass a `value` to `MyContext.Provider`
    <MyContext.Provider value={{ theme, Toggle }}>
      <B />
    </MyContext.Provider>
  );
}

export default A;
