import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostType} from "features/posts/types";
import {setIsLoading} from "app/appSlice";
import {API} from "api/api";

const initialState = {
  post: {} as PostType
}

const postPageSlice = createSlice({
  name: 'postPageSlice',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<{ post: PostType }>) => {
      state.post = action.payload.post
    }
  }
})

export const fetchPost = createAsyncThunk('fetchPost',
  async (id: string, {dispatch}) => {
    try {
      dispatch(setIsLoading({isLoading: true}))
      const res = await API.getPost(id)
      dispatch(setPost({post: res.data}))
    } catch (e) {

    }
  }
)

export const postPageReducer = postPageSlice.reducer
export const {setPost} = postPageSlice.actions
