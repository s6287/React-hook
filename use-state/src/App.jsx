import React, { useState } from "react";

const App = () => {
  // COUNTER (Increment by 5)
  const [count, setCount] = useState(0);
  const incrementByFive = () => setCount(count + 5);

  // TEXT INPUT (Capture User Input)
  const [text, setText] = useState("");
  const handleTextChange = (e) => setText(e.target.value);

  // TEXT LENGTH (Display Length of Text Typed)
  const textLength = text.length;

  // HIDE TOGGLE (Show/Hide Element)
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // TO-DO APP
  const [input, setInput] = useState([]); // List of tasks
  const [todo, setTodo] = useState("");   // Current input value for task

  // Show text in the input field
  const showtext = (e) => setTodo(e.target.value);

  // Add task to the list
  const addTask = () => {
    if (todo.trim() === "") return; // Prevent empty tasks
    setInput([...input, todo]);     // Adds new task to the list
    setTodo("");                    // Clears input field
  };

  // Delete task by index
  const deleteTask = (index) => {
    const updatedTasks = input.filter((_, i) => i !== index); // Removes task by index
    setInput(updatedTasks);
  };

  return (
    <div>
      <h1>React `useState` Example</h1>
      
      {/* COUNTER SECTION */}
      <h2>Counter</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementByFive}>Increase by 5</button>
      </div>

      {/* TEXT INPUT SECTION */}
      <h2>Text Input</h2>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type something..."
        />
      </div>

      {/* TEXT LENGTH AND TEXT DISPLAY SECTION */}
      <h2>Text Length</h2>
      <div>
        <p>Text Typed: "{text}"</p>
        <p>Text Length: {textLength}</p>
      </div>

      {/* HIDE TOGGLE SECTION */}
      <h2>Hide/Show Toggle</h2>
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide" : "Show"} Element
        </button>
        {isVisible && <p>This element is now visible!</p>}
      </div>

      {/* TO-DO APP SECTION */}
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={todo}
          onChange={showtext}
          placeholder="Enter your task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {input.map((task, index) => (
            <li key={index}>
              {task} 
              <button onClick={() => deleteTask(index)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
