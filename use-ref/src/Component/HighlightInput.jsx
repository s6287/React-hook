import React, { useRef } from 'react';

function HighlightInput() {
    const inputRef = useRef(null);

    function toggleColor() {
        if (inputRef.current) {
            if (inputRef.current.style.backgroundColor === "yellow") {
                inputRef.current.style.backgroundColor = "white"; // Change to white
            } else {
                inputRef.current.style.backgroundColor = "yellow"; // Change to yellow
            }
        }
    }

    return (
        <>
            <input ref={inputRef} type="text" placeholder='useref' />
            <button onClick={toggleColor}>Toggle Color</button>
        </>
    );
}

export default HighlightInput;
