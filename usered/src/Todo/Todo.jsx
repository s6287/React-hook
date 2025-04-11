import React from 'react'
import { useReducer } from 'react'
function reducer(action,state) {
    if(action.type="")
}

function Todo() {
    
    const [state,dispatch] = useReducer(reducer,action)
  return (
      <>
          <h1>To do App using Use Reducer</h1>
          
          <input type="text" placeholder='Enter Task' /> <br /> <br />

          <button>Add Button</button>
      </>
  )
}

export default Todo