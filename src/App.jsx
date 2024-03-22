import React from 'react'
import { useState } from 'react'

function App() {
  
  const[searchElement, setsearchElement] = useState("");


   const valSearchElement = (e) => {
      setsearchElement(e.target.value)
   };

  return (
    <div className='search-container'>
    <div className='search-input-field'>
       <input  value={searchElement} onChange={valSearchElement}
       placeholder='Search your items here...'></input>
       </div>
    </div>
  )
}

export default App
