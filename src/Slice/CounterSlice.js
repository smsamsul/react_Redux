import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state,action) => {
   state.value += action.payload
    console.log("ffff", state.value,action)
    },

    disincrement: (state,action) => {
        if(state.value > 1){
            state.value -= action.payload
        console.log("ffff", state.value,action)
        }
        
        },

        devided: (state,action) => {
            state.value /= action.payload
             console.log("ffff", state.value,action)
             },

            
          
           
             




  },
  
})


export const { increment, disincrement,devided, 
  } = counterSlice.actions

export default counterSlice.reducer