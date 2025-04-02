import { useState } from 'react'
import './App.css'
import HighlightInput from './Component/HighlightInput.jsX'
import ShowPreviousText from './Component/ShowPreviousText'
function App() {

  return (
    <>
      <h1> Learning UseRef Hook In react</h1>
      <HighlightInput />
      <ShowPreviousText/>
    </>
  )
}

export default App
