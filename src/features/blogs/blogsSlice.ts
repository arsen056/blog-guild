import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogType, GetBlogsResponseType} from "./types";
import {API} from "api/api";

const initialState = {
  blogs: [] as BlogType[],
  pagesCount: 0 as number,
  page: 1 as number,
  pageSize: 0 as number,
  totalCount: 0 as number,
}

const blogsSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<GetBlogsResponseType>) => {
      state.blogs = action.payload.items
      state.pagesCount = action.payload.pagesCount
      state.page = action.payload.page
      state.pageSize = action.payload.pageSize
      state.totalCount = action.payload.totalCount
    }
  }
})

export const fetchBlogs = createAsyncThunk(
  'fetchBlogs',
  async (_, {dispatch, getState}) => {
    try {
      const res = await API.getBlogs()
      dispatch(setBlogs(res.data))
    } catch (e) {

    }
  }
)

export const {setBlogs} = blogsSlice.actions
export const blogReducer = blogsSlice.reducer

