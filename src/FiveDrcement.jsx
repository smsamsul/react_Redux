import React from 'react'
import { useDispatch } from 'react-redux'
import { FiveDrcement1 } from './Slice/CounterSlice'

const FiveDrcement = () => {
    let defive = useDispatch()
  return (
    <div>
      <button onClick={()=> defive(FiveDrcement1())}>Minus</button>
    </div>
  )
}

export default FiveDrcement
