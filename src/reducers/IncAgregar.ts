// src/reducers/IncDecSlice.ts
import {createSlice} from '@reduxjs/toolkit'
import { stat } from 'fs'

interface IncDecInitialStateType {
  currentAgregar: Array<Object>
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
    currentAgregar: []
}

const IncGuardarSlice = createSlice({
  name: "incAgregar", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    agregarNombre: (state, action) => {
      state.currentAgregar = [...state.currentAgregar, action.payload]
    },
    borrarNombre: (state, action) => {
      const newArray = state.currentAgregar.filter((objs, index) => index !== action.payload)
      state.currentAgregar = newArray
    }
  }, // action methods
})

export const IncGuardarServices = {
  actions: IncGuardarSlice.actions, //This includes all the action methods written above
}

const IncGuardarReducer = IncGuardarSlice.reducer //This is stored in the main store
export default IncGuardarReducer