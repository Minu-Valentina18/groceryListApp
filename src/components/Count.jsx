import React, { useEffect } from 'react'
import { useState } from 'react';

function Count() {

const [count1,setCount1] = useState(0);
const [count2, setCount2] = useState(0);
const [sum, setSum] = useState(0);

const handleEvent1 = (e) => {
  setCount1(parseInt(e.target.value));
}
;
const handleEvent2 = (e) => {
  setCount2(parseInt(e.target.value));
}

const calculatesum = () => {
setSum(count1 + count2);
}

  return (
    <div>

     <input type="number" value ={count1} onChange={handleEvent1}></input> <br />
     <input type="number" value ={count2} onChange={handleEvent2}></input> <br />
      <button onClick={calculatesum}>calculate</button> <br />

      <p> sum : {sum} </p>
    
    </div>
  )
}

export default Count
