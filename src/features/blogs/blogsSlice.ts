import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlogType, GetBlogsResponseType} from "./types";
import {API} from "api/api";
import {RootStateType} from "app/store";
import {setIsLoading} from "app/appSlice";

const initialState = {
  blogs: [] as BlogType[],
  pagesCount: 0 as number,
  page: 1 as number,
  pageSize: 0 as number,
  totalCount: 0 as number,
  searchParams: {
    searchNameTerm: ''
  }
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
    },
    setSearchName: (state, action: PayloadAction<{ searchName: string }>) => {
      state.searchParams.searchNameTerm = action.payload.searchName
    }
  }
})

export const fetchBlogs = createAsyncThunk(
  'fetchBlogs',
  async (_, {dispatch, getState}) => {
    const state = getState() as RootStateType
    const searchNameTerm = state.blogs.searchParams.searchNameTerm

    try {
      dispatch(setIsLoading({isLoading: true}))
      const res = await API.getBlogs({searchNameTerm})
      dispatch(setBlogs(res.data))
    } catch (e) {

    }
    dispatch(setIsLoading({isLoading: false}))
  }
)

export const {setBlogs, setSearchName} = blogsSlice.actions
export const blogReducer = blogsSlice.reducer
