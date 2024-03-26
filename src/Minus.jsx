import React from 'react'
import {  useDispatch } from 'react-redux'
import { disincrement } from './Slice/CounterSlice'
const Minus = () => {
let dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(disincrement(5))}>Minus</button>
    </div>
  )
}

export default Minus
