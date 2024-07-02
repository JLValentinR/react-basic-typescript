// src/reducers/IncDecSlice.ts
import {createSlice} from '@reduxjs/toolkit'

interface IncDecInitialStateType {
  currentName: string
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
    currentName: 'Prueba'
}

const IncNameSlice = createSlice({
  name: "incName", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    mostrarNombre: (state, action) => {
      state.currentName = action.payload
    }
  }, // action methods
})

export const IncNameServices = {
  actions: IncNameSlice.actions, //This includes all the action methods written above
}

const IncNameReducer = IncNameSlice.reducer //This is stored in the main store
export default IncNameReducer