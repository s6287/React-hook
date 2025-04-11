import './App.css'
import { useReducer } from 'react'
import Todo from './Todo/Todo'

// Step 3: Write reducer function
function reducer(state, action) {
  // Compare action.type, not action directly
  if (action.type === "Increment") {
    return { count: state.count + 1 }
  } else if (action.type === "Decrement") {
    return { count: state.count - 1 }
  } else {
    return { count: 0 }
  }
}

function App() {
  // Step 2: Write initial state
  const initialState = { count: 0 }
  
  // Step 1: Write syntax
  const [state, dispatch] = useReducer(reducer, initialState);

  // Step 4: Dispatch functions
  function Incrementt() {
    dispatch({ type: "Increment" }) // Corrected dispatch
  }

  function Decrementt() {
    dispatch({ type: "Decrement" }) // Corrected dispatch
  }

  return (
    <>
      <h1>Simple counter using useReducer — Count: {state.count}</h1> 
      
      <button onClick={Incrementt}>Increment</button>
      <br /> <br />
      <button onClick={Decrementt}>Decrement</button>

      <Todo/>
    </>
  )
}

export default App;
