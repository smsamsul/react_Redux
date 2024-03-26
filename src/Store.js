import { configureStore } from '@reduxjs/toolkit'

import CounterSlice from './Slice/CounterSlice'

export default configureStore({
  reducer: {
    myFristData:CounterSlice

  },
})