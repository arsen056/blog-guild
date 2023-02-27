import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetPostsResponseType, PostType} from "features/posts/types";
import {API} from "api/api";

const initialState = {
  posts: [] as PostType[],
  pagesCount: 0,
  page: 0,
  pageSize: 0,
  totalCount: 0,  
}

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<GetPostsResponseType>) => {
      state.posts = action.payload.items
      state.pagesCount = action.payload.pagesCount
      state.page = action.payload.page
      state.pageSize = action.payload.pageSize
      state.totalCount = action.payload.totalCount
    }
  }
})

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async (_, {dispatch, getState}) => {
    try {
      const res = await API.getPosts()
      dispatch(setPosts(res.data))
    } catch (e) {

    }
  }
)

export const postsReducer = postsSlice.reducer
export const {setPosts} = postsSlice.actions