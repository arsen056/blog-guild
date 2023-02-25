import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  blogs: []
}

const blogsSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setBlogs (state, action: any) {
      state.blogs = action.blogs
    }
  }
})

export const {setBlogs} = blogsSlice.actions
export const blogReducer = blogsSlice.reducer
