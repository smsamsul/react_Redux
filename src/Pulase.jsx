import React from 'react'

import {  useDispatch } from 'react-redux'
import { increment } from './Slice/CounterSlice'
const Pulase = () => {
    let dispatvh = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatvh(increment(5))}>Pulase</button>
    </div>
  )
}

export default Pulase
