import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetPostsResponseType, PostType} from "features/posts/types";

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

export const postsReducer = postsSlice.reducer
export const {setPosts} = postsSlice.actions