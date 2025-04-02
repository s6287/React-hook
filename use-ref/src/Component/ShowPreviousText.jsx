import React, { useRef, useState } from "react";

function ShowPreviousText() {
    const inputref = useRef(null);  // Ref for input field
    const previous = useRef("");  // Stores previous text
    const [text, setText] = useState(""); // Stores current text

    function handle() {
        if (inputref.current) {
            previous.current = text; // Store current text as previous
            setText(inputref.current.value); // Update current text
        }
    }

    return (
        <>
            <br /> <br />
            <h2>Previous Text: {previous.current}</h2>
            <h2>Current Text: {text}</h2> {/* ✅ Fixed the variable name */}
            <input ref={inputref} type="text" placeholder="Type something..." /> 
            <button onClick={handle}>Show Text</button>
        </>
    );
}

export default ShowPreviousText;
