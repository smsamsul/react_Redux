import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, disincrement, devided} from './Slice/CounterSlice';


const Input = () => {
  const [inputValue, setInputValue] = useState(0);
 
const first = (second) => { third }
 
  
  const handleChange = (e) => {

    setInputValue(e.target.value)
  }
  
  console.log(typeof inputValue)

  let dispatch = useDispatch ()

  return (
    <div>
       <input type='text'  onChange={handleChange} />
       <br />
      <button className='mt-10' onClick={()=>dispatch(increment(+inputValue))}>
     
    Pulase
    </button>
    
    <br />
   
    <button className='mt-10' onClick={()=>dispatch( disincrement(+inputValue))}>Minus</button>

    <br />

    <button className='mt-10' onClick={()=>dispatch(  devided(+inputValue))}> devided</button>

    </div>
  )
}

export default Input


