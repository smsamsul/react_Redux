import React from 'react'
import {  useDispatch } from 'react-redux'
import {FiveIncrement1 } from './Slice/CounterSlice'
const FiveIncrement = () => {

    let five = useDispatch()
    
  return (
    <div>
    <button onClick={()=>five(FiveIncrement1())}>
    Pulase
    </button>
    </div>
  )
}

export default FiveIncrement
