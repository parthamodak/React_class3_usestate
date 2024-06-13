import React, { useState } from 'react'
import Counter from './Counter'

function App() {

  let [showCount, setShowCount]= useState(false) 
  
  
  let handleToggle=()=>{
    setShowCount(!showCount)
  }

  return (
    <>
      <button onClick={handleToggle}>btn</button>
      {
        showCount&&
      
    <Counter title='counter'/>
  }
    </>
  )
}

export default App