import {BlogType } from "features/blogs/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "api/api";
import {setIsLoading} from "app/appSlice";
import {PostType} from "features/posts/types";

const initialState = {
  blog: {} as BlogType,
  posts: [] as PostType[],
}

const blogSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<{blog: BlogType}>) => {
      state.blog = action.payload.blog
    },
    setPostsForBlog: (state, action: PayloadAction<{posts: PostType[]}>) => {
      state.posts = action.payload.posts
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
      dispatch(getPostsForBlog(id))
    } catch (e) {

    }
    dispatch(setIsLoading({isLoading: false}))
  }
)

const getPostsForBlog = createAsyncThunk(
  'getPostsForBlog',
  async (id: string, {dispatch}) => {

    try {
      dispatch(setIsLoading({isLoading: true}))
      const res = await API.getPostsForBlog(id)
      dispatch(setPostsForBlog({posts: res.data.items}))
    } catch (e) {

    }
    dispatch(setIsLoading({isLoading: false}))
  }
)

export const {setBlog, setPostsForBlog} = blogSlice.actions
export const blogReducer = blogSlice.reducer