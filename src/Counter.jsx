import React, {useState} from 'react'

const Counter =({title}) => {
  let [count,fun]=useState(0);
  let [num, lastnum]= useState(10);
  
  
  
  
  let handleClick=()=>{
  fun(count=count+1)
     lastnum(num=num+2)
    
   console.log(count)
    

   }


  return (
    <>
     
  
   <h1> {title}</h1>
   <h2>{count}</h2>
   <h3>{num}</h3>
   <button onClick={handleClick}>click</button>
   </>
  )
}

export default Counter