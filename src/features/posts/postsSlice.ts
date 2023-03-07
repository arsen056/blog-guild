import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GetPostsResponseType, PostParamsType, PostType} from "features/posts/types";
import {API} from "api/api";
import {RootStateType} from "app/store";

const initialState = {
  items: [] as PostType[],
  pagesCount: 0,
  page: 0,
  pageSize: 6,
  totalCount: 0,
  searchParams: {
    sortDirection: 'desc' as 'asc' | 'desc'
  },
  isLoadingPosts: false
}

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<GetPostsResponseType>) => {
      state.items = action.payload.items
      state.pagesCount = action.payload.pagesCount
      state.page = action.payload.page
      state.pageSize = action.payload.pageSize
      state.totalCount = action.payload.totalCount
    },
    setSortDirectionPosts: (state, action: PayloadAction<{ sortDirection: 'asc' | 'desc' }>) => {
      state.searchParams.sortDirection = action.payload.sortDirection
    },
    showMorePosts: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setIsLoadingPosts: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoadingPosts = action.payload.isLoading
    },
  }
})

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async (_, {dispatch, getState}) => {
    const state = getState() as RootStateType
    const sortDirection = state.posts.searchParams.sortDirection
    const pageSize = state.posts.pageSize

    try {

      dispatch(setIsLoadingPosts({isLoading: true}))
      const res = await API.getPosts({sortDirection, pageSize})
      dispatch(setPosts(res.data))
    } catch (e) {
      console.error(e)
    }
    dispatch(setIsLoadingPosts({isLoading: false}))
  }
)

export const fetchPostsForBlog = createAsyncThunk(
  'getPostsForBlog',
  async (params: PostParamsType,  {dispatch}) => {

    const {id, pageSize} = params

    try {
      dispatch(setIsLoadingPosts({isLoading: true}))
      const res = await API.getPostsForBlog(id, {pageSize})
      dispatch(setPosts(res.data))
    } catch (e) {
      console.error(e)
    }
    dispatch(setIsLoadingPosts({isLoading: false}))
  }
)

export const postsReducer = postsSlice.reducer
export const {setPosts, setSortDirectionPosts, showMorePosts, setIsLoadingPosts} = postsSlice.actions