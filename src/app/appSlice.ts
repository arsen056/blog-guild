import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: '' ,
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error
    }
  }
})

export const {setIsLoading, setError} = appSlice.actions

export const appReducer = appSlice.reducer



