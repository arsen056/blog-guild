import {BlogType } from "features/blogs/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "api/api";
import {setIsLoading} from "app/appSlice";

const initialState = {
  blog: {} as BlogType,
}

const blogSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<{blog: BlogType}>) => {
      state.blog = action.payload.blog
    }
  }
})

export const getBlog = createAsyncThunk(
  'getBlogByID',
  async (id: string, {dispatch}) => {

    try {
      dispatch(setIsLoading({isLoading: true}))
      const res = await API.getBlog(id)
      dispatch(setBlog({blog: res.data}))
    } catch (e) {
      console.error(e)
    }
    dispatch(setIsLoading({isLoading: false}))
  }
)

export const {setBlog} = blogSlice.actions
export const blogReducer = blogSlice.reducer