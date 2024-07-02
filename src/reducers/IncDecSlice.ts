// src/reducers/IncDecSlice.ts
import {createSlice} from '@reduxjs/toolkit'

interface IncDecInitialStateType {
  currentNumber: number
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
  currentNumber: 0
}

const IncDecSlice = createSlice({
  name: "incDecSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    incrementNumber: (state) => {
      state.currentNumber += 1
    },
    decrementNumber: (state) => {
      state.currentNumber -= 1
    },
    incrementUserValue: (state, action) => {
      state.currentNumber += action.payload
    },
    decrementUserValue: (state, action) => {
      state.currentNumber -= action.payload
    }
  }, // action methods
})

export const IncDecServices = {
  actions: IncDecSlice.actions, //This includes all the action methods written above
}

const IncDecReducer = IncDecSlice.reducer //This is stored in the main store
export default IncDecReducer