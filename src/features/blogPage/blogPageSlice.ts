import {BlogType } from "features/blogs/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API} from "api/api";
import {setIsLoading} from "app/appSlice";
import {GetPostsResponseType, PostType} from "features/posts/types";

const initialState = {
  blog: {} as BlogType,
  posts: {
    items: [] as PostType[],
    pagesCount: 0 as number,
    page: 0 as number,
    pageSize: 0 as number,
    totalCount: 0 as number,
  },
}

const blogSlice = createSlice({
  name: 'blogSlice',
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<{blog: BlogType}>) => {
      state.blog = action.payload.blog
    },
    setPostsForBlog: (state, action: PayloadAction<GetPostsResponseType>) => {
      state.posts.items = action.payload.items
      state.posts.pagesCount = action.payload.pagesCount
      state.posts.page = action.payload.page
      state.posts.pageSize = action.payload.pageSize
      state.posts.totalCount = action.payload.totalCount
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

type PostParamsType = {
  id: string,
  pageSize: number
}

export const getPostsForBlog = createAsyncThunk(
  'getPostsForBlog',
  async (params: PostParamsType,  {dispatch}) => {

    const {id, pageSize} = params

    try {
      dispatch(setIsLoading({isLoading: true}))
      const res = await API.getPostsForBlog(id, {pageSize})
      dispatch(setPostsForBlog(res.data))
    } catch (e) {

    }
    dispatch(setIsLoading({isLoading: false}))
  }
)

export const {setBlog, setPostsForBlog} = blogSlice.actions
export const blogReducer = blogSlice.reducer