import React from 'react'

import {  useDispatch } from 'react-redux'
import { devided } from './Slice/CounterSlice'


const Devided = () => {
    let update =  useDispatch()
  return (
    <div>
      <button onClick={()=> update(devided(10))}>Devided</button>
    </div>
  )
}

export default Devided
