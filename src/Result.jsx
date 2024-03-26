import React from 'react'
import { useSelector } from 'react-redux'


const Result = () => {
    
let update = useSelector((state)=> state.myFristData.value)
  return (

    <div>
      {update}
    </div>
  )
}

export default Result
