import React, { useContext } from 'react';
import { MyContext } from './A';

function C() {
  const { Toggle, theme } = useContext(MyContext); // ✅ Get theme and Toggle function

  return (
    // ✅ Apply theme to the entire page inside C.js
    <div style={{
      backgroundColor: theme ? 'black' : 'white', // ✅ Change background color
      color: theme ? 'white' : 'black', // ✅ Change text color
      minHeight: '100vh', // ✅ Ensure it covers the full screen
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.3s ease-in-out' // ✅ Smooth transition
    }}>
      <h1>Theme Toggle App</h1>

      {/* ✅ Theme-changing button */}
      <button 
        onClick={Toggle}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '10px',
          border: 'none',
          borderRadius: '5px',
          background: theme ? 'white' : 'black', // ✅ Change button background
          color: theme ? 'black' : 'white', // ✅ Change button text color
          transition: '0.3s ease-in-out' // ✅ Smooth transition effect
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default C;
